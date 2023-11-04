import { useState } from 'react';
import { EXAMPLES } from '../data';
import TabButton from './TabButton';
import Section from './Section.jsx';

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState();

    function handleClick(selectedTopic) {
        setSelectedTopic(selectedTopic);
    }

    let tabContent = <p>Please select a topic.</p>;

    if (selectedTopic) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div>
        );
    }

    return (
        <Section id="examples" title="Examples">
            <menu>
                <TabButton
                    isSelected={selectedTopic === 'components'}
                    onClick={() => handleClick('components')}
                >
                    Components
                </TabButton>
                <TabButton
                    isSelected={selectedTopic === 'jsx'}
                    onClick={() => handleClick('jsx')}
                >
                    JSX
                </TabButton>
                <TabButton
                    isSelected={selectedTopic === 'props'}
                    onClick={() => handleClick('props')}
                >
                    Props
                </TabButton>
                <TabButton
                    isSelected={selectedTopic === 'state'}
                    onClick={() => handleClick('state')}
                >
                    States
                </TabButton>
            </menu>
            {tabContent}

            {/* Alternative method to conditionally render */}

            {/* {!selectedTopic && <p>Please select a topic</p>}
                    {selectedTopic && (
                        <div id="tab-content">
                            <h3>{EXAMPLES[selectedTopic].title}</h3>
                            <p>{EXAMPLES[selectedTopic].description}</p>
                            <pre>
                                <code>{EXAMPLES[selectedTopic].code}</code>
                            </pre>
                        </div>
                    )} */}
        </Section>
    );
}
