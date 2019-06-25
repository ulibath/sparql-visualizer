import { VisualisationIdentifier } from '../visualizations/index.types';
import { WikidataEndpoint } from '../wikidata-endpoint';
import { getVisualization } from './Serializer';

describe('Serializer', () => {
    let elem: HTMLElement;
    let scriptElem: HTMLElement;
    let wikidataEndpoint: WikidataEndpoint;
    let visId: VisualisationIdentifier;

    beforeEach(() => {
        elem = document.createElement('div');
        scriptElem = document.createElement('script');
        scriptElem.innerText =
            '\n' +
            '                    {\n' +
            '                        query:\n' +
            '                        `\n' +
            '                        #\n' +
            '                        Musikgenres\n' +
            '                        #\n' +
            '                        graph\n' +
            '                        rendering\n' +
            '                        could\n' +
            '                        be\n' +
            '                        slow\n' +
            '                        due\n' +
            '                        to\n' +
            '                        large\n' +
            '                        number\n' +
            '                        of\n' +
            '                        results\n' +
            '\n' +
            '                        SELECT\n' +
            '                        ?\n' +
            '                        item\n' +
            '                        ?\n' +
            '                        itemLabel\n' +
            '                        ?\n' +
            '                        _subclass_of\n' +
            '                        ?\n' +
            '                        _subclass_ofLabel\n' +
            '                        WHERE {\n' +
            '                        ?item wdt:P31 wd: Q188451;\n' +
            '                    wdt: P279 ?_subclass_of.\n' +
            '                    SERVICE wikibase: label {bd: serviceParam wikibase:language "[AUTO_LANGUAGE],en".}\n' +
            '                    } LIMIT 100\n' +
            '                    `\n' +
            '                    }';
        elem.appendChild(scriptElem);
        wikidataEndpoint = new WikidataEndpoint();
        visId = 'Table';
    });

    it('should return HTMl element', () => {
        expect(getVisualization(elem, wikidataEndpoint, visId)).toBeInstanceOf(HTMLElement);
    });
});
