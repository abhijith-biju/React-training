import { CORE_CONCEPTS } from '../data.js';
import CoreConceptCard from './CoreConceptCard.jsx';
import Section from './Section.jsx';

export default function CoreConcepts() {
    return (
        <Section id="core-concepts" title="Core Concepts">
            <ul>
                {CORE_CONCEPTS.map((conceptItem, index) => (
                    <CoreConceptCard {...conceptItem} key={index} />
                ))}
            </ul>
        </Section>
    );
}
