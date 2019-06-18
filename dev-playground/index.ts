import { VisualisationIdentifier } from '../sparql-visualizer/visualizations/index.types';
import { WikidataEndpoint } from '../sparql-visualizer/wikidata-endpoint';
import {
    DEFAULT_WIKIDATA_CONFIG,
    FU_WIKIDATA_CONFIG
} from '../sparql-visualizer/wikidata-endpoint/Endpoint';
import './style.scss';

const endpointList: WikidataEndpoint[] = [];
const visIdList: VisualisationIdentifier[] = [];
let selectedVisIdPosition: number = 0;
let selectedEndpointPosition: number = 0;

init();

// TODO init serializer

export function init(): void {
    endpointList.push(new WikidataEndpoint(DEFAULT_WIKIDATA_CONFIG));
    endpointList.push(new WikidataEndpoint(FU_WIKIDATA_CONFIG));

    visIdList.push(
        'BubbleChart',
        'BarChart',
        'Table',
        'ScatterChart',
        'AreaChart',
        'Tree',
        'Dimensions',
        'Graph',
        'Timeline',
        'TreeMap',
        'Map',
        'ImageGrid',
        'LineChart'
    );

    const visIdSelection: HTMLSelectElement | null = addDropdownSelection(
        'select-chart',
        visIdList
    );
    const endpointSelection: HTMLSelectElement | null = addDropdownSelection(
        'select-endpoint',
        endpointList
    );
    const refreshButton: HTMLButtonElement | null = document.getElementById(
        'refresh-button'
    ) as HTMLButtonElement;

    if (visIdSelection) {
        visIdSelection.addEventListener('change', (event: Event) => {
            if (event.target instanceof HTMLSelectElement) {
                selectedVisIdPosition = Number.parseInt(event.target.value, 10);
            }
        });
    }
    if (endpointSelection) {
        endpointSelection.addEventListener('change', (event: Event) => {
            if (event.target instanceof HTMLSelectElement) {
                selectedEndpointPosition = Number.parseInt(event.target.value, 10);
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
    const selectElement: HTMLSelectElement | null = document.getElementById(
        id
    ) as HTMLSelectElement;
    if (selectElement) {
        options.forEach((option: any, index) => {
            const tmpOption: HTMLOptionElement = document.createElement('option');
            tmpOption.value = '' + index;
            tmpOption.text = option.toString();
            selectElement.add(tmpOption);
        });
    }
    return selectElement;
}

export function refreshVisualisation() {
    console.log(endpointList[selectedEndpointPosition].toString());
    console.log(visIdList[selectedVisIdPosition]);
}
