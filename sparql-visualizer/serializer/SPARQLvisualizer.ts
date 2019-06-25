import { DATA_ATTRBIUTE_NAME, IFRAME_CLASS } from '../../dev-playground/variables';
import { VisualisationIdentifier } from '../visualizations/index.types';
import { WikidataEndpoint } from '../wikidata-endpoint';
import { getVisualization } from './Serializer';

export class SPARQLvisualizer {
    private endpoint: WikidataEndpoint = null;
    private visId: VisualisationIdentifier = null;
    private dataList: NodeList;

    constructor() {
        this.dataList = document.querySelectorAll(DATA_ATTRBIUTE_NAME);
    }

    public setEndpoint(endpoint: WikidataEndpoint): SPARQLvisualizer {
        this.endpoint = endpoint;
        return this;
    }

    public setVisId(visId: VisualisationIdentifier): SPARQLvisualizer {
        this.visId = visId;
        return this;
    }

    public build(): void {
        this.dataList.forEach((data: Node) => {
            const visElement: HTMLElement = getVisualization(
                data as HTMLElement,
                this.endpoint,
                this.visId
            );
            if (this.visId !== 'Table') {
                visElement.setAttribute('class', IFRAME_CLASS);
            }

            if (data.childNodes.length > 1) {
                data.replaceChild(visElement, data.childNodes[1]);
            } else {
                data.appendChild(visElement);
            }
        });
    }
}
