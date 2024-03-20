import Accordion from "../components/Accordion";

function AccordionPage() {
    const items = [{
        id: 1,
        label: 'Item 1',
        content: 'Here is more info'
    }, {
        id: 2,
        label: 'Item 2',
        content: 'Here is some other info'
    }, {
        id: 3,
        label: 'Item 3',
        content: 'Whoa even more content'
    }];

    return <Accordion items={items} />;
}

export default AccordionPage;