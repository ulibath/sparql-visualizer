import { VisualisationIdentifier } from '../sparql-visualizer/visualizations/graphical/index.types';
import { WikidataEndpoint, WikidataEndpointConfig } from '../sparql-visualizer/wikidata-endpoint';
import './style.scss';

const endpointList: WikidataEndpoint[] = [];
const visIdList: VisualisationIdentifier[] = [];
let selectedVisIdPosition: number = 0;
let selectedEndpointPosition: number = 0;

init();

// TODO init serializer

export function init(): void {
    const wikidataEndpoint: WikidataEndpointConfig = {
        host: 'wikidata.org',
        httpProtocol: 'https',
        port: 0
    };
    const fuEndpoint: WikidataEndpointConfig = {
        host: 'aghcc-edu01.imp.fu-berlin.de',
        httpProtocol: 'http',
        port: 0
    };
    endpointList.push(new WikidataEndpoint(wikidataEndpoint));
    endpointList.push(new WikidataEndpoint(fuEndpoint));

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
    const refreshButton: HTMLButtonElement | null = (
        document.getElementById('refresh-button')
    ) as HTMLButtonElement;

    if (visIdSelection) {
        visIdSelection.addEventListener('change', function(event) {
            if (event.target instanceof HTMLSelectElement) {
                const value: number = Number.parseInt(event.target.value, 10);
                selectedVisIdPosition = value;
            }
        });
    }
    if (endpointSelection) {
        endpointSelection.addEventListener('change', function(event) {
            if (event.target instanceof HTMLSelectElement) {
                const value: number = Number.parseInt(event.target.value, 10);
                selectedEndpointPosition = value;
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
    const selectElement: HTMLSelectElement | null = document.getElementById(id) as HTMLSelectElement;
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
