const nestedDomElements = React.createElement('div',
    { id: 'parent' },
    [React.createElement('div', { id: 'child-1' }, React.createElement('h1', {}, 'I am h1 tag')),
    React.createElement('div', { id: 'child-2' }, [React.createElement('h1', {}, 'I am h1 tag'),
    React.createElement('h2', {}, 'I am h2 tag')])
    ])

const heading = React.createElement('h1', { id: "heading" }, "hello world form react!");
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(nestedDomElements);