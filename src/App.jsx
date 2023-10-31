import Header from './components/Header/Header.jsx';
import { CORE_CONCEPTS } from './data.js';
import CoreConcepts from './components/CoreComponents.jsx';
import TabButton from './components/TabButton.jsx';

function App() {
    return (
        <div>
            <Header />
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        <CoreConcepts {...CORE_CONCEPTS[0]} />
                        <CoreConcepts {...CORE_CONCEPTS[1]} />
                        <CoreConcepts {...CORE_CONCEPTS[2]} />
                        <CoreConcepts {...CORE_CONCEPTS[3]} />
                    </ul>
                </section>
                <section id="examples">
                    <menu>
                        <TabButton>Components</TabButton>
                        <TabButton>JSX</TabButton>
                        <TabButton>Props</TabButton>
                        <TabButton>States</TabButton>
                    </menu>
                </section>
            </main>
        </div>
    );
}

export default App;
