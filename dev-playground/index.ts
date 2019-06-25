import { SPARQLvisualizer } from '../sparql-visualizer/serializer';
import './style.scss';
import { ENDPOINT_LIST, VISUALIZATION_TYPES_LIST } from './variables';

init();

export function init(): void {
    // TODO init serializer
    const serializer: SPARQLvisualizer = new SPARQLvisualizer();
    serializer
        .setEndpoint(ENDPOINT_LIST[0])
        .setVisId(VISUALIZATION_TYPES_LIST[0])
        .build();

    const visIdSelection: HTMLSelectElement | null = addDropdownSelection(
        'select-chart',
        VISUALIZATION_TYPES_LIST
    );
    const endpointSelection: HTMLSelectElement | null = addDropdownSelection(
        'select-endpoint',
        ENDPOINT_LIST
    );
    const refreshButton: HTMLButtonElement | null = document.getElementById(
        'refresh-button'
    ) as HTMLButtonElement;

    if (visIdSelection) {
        visIdSelection.addEventListener('change', (event: Event) => {
            if (event.target instanceof HTMLSelectElement) {
                // TODO serializer.setVisId
            }
        });
    }
    if (endpointSelection) {
        endpointSelection.addEventListener('change', (event: Event) => {
            if (event.target instanceof HTMLSelectElement) {
                // TODO serializer.setEndpoint
            }
        });
    }
    if (refreshButton) {
        refreshButton.addEventListener('click', function() {
            refreshVisualisation();
        });
    }
}

export function addDropdownSelection(id: string, options: Object[]): HTMLSelectElement {
    const selectedElement: HTMLSelectElement | null = document.getElementById(
        id
    ) as HTMLSelectElement;
    if (selectedElement) {
        options.forEach((option: any, index) => {
            const tmpOption: HTMLOptionElement = document.createElement('option');
            tmpOption.value = '' + index;
            tmpOption.text = option.toString();
            if (index === 0) {
                tmpOption.defaultSelected;
            }
            selectedElement.add(tmpOption);
        });
    }
    return selectedElement;
}

export function refreshVisualisation() {
    // TODO serializer.build()
}
