import type {MaskitoPreprocessor} from '@maskito/core';

import {DATE_TIME_SEPARATOR} from '../masks/date-time/constants';

export function normalizeDatePreprocessor({
    dateModeTemplate,
    dateSegmentsSeparator,
    rangeSeparator = '',
}: {
    dateModeTemplate: string;
    dateSegmentsSeparator: string;
    rangeSeparator?: string;
}): MaskitoPreprocessor {
    return ({elementState, data}) => {
        const separator = rangeSeparator
            ? new RegExp(`${rangeSeparator}|-`)
            : DATE_TIME_SEPARATOR;
        const possibleDates = data.split(separator);

        const dates = data.includes(DATE_TIME_SEPARATOR)
            ? [possibleDates[0]]
            : possibleDates;

        if (
            dates.every(
                date =>
                    date.trim().split(/\D/).length ===
                    dateModeTemplate.split(dateSegmentsSeparator).length,
            )
        ) {
            const newData = dates
                .map(date =>
                    normalizeDateString(date, dateModeTemplate, dateSegmentsSeparator),
                )
                .join(rangeSeparator);

            return {
                elementState,
                data: `${newData}${
                    data.includes(DATE_TIME_SEPARATOR)
                        ? DATE_TIME_SEPARATOR + possibleDates[1] || ''
                        : ''
                }`,
            };
        }

        return {elementState, data};
    };
}

function normalizeDateString(
    dateString: string,
    template: string,
    separator: string,
): string {
    const dateSegments = dateString.split(/\D/);
    const templateSegments = template.split(separator);
    const normalizedSegments = dateSegments.map((segment, index) =>
        index === templateSegments.length - 1
            ? segment
            : segment.padStart(templateSegments[index].length, '0'),
    );

    return normalizedSegments.join(separator);
}
