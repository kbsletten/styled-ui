webpackJsonp([32],{1294:function(t,e,n){var o=n(3),a=n(79),r=n(564).PageRenderer;r.__esModule&&(r=r.default);var i=a({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:n(1328)}},componentWillMount:function(){},render:function(){return o.createElement(r,Object.assign({},this.props,{content:this.state.content}))}});i.__catalog_loader__=!0,t.exports=i},1328:function(t,e){t.exports='Most Bootstrap 4 components can be used in existing projects, powered by Reactstrap.\n\n```hint|directive\nThese components require the [Faithlife Bootstrap base stylesheet](/bootstrap/stylesheet) to be loaded globally in your app.\n```\n\n## When to use these components\n\nThese components can help get teams working on new apps that don\'t have a lot of extra time. Typically we create the controls that we need from scratch, but unless care is taken, these controls might have accessibility problems. These bootstrap controls leverage the work already done by the Reactstrap and Bootstrap communities to make your application work well. That said, if there is a component provided in this Bootstrap section that also exists elsewhere in this library (such as Button), prefer to use the Faithlife-maintained component.\n\n## How to use\n\nImport the [scoped Bootstrap stylesheet into your application](/bootstrap/stylesheet) first. Then:\n\n```\nimport { Bootstrap } from \'@faithlife/styled-ui\';\n\nconst { Button } = Bootstrap;\n\nconst MyComponent = props => <Button color="primary">primary</Button>;\n\n```\n\nSee the [Reactstrap](https://reactstrap.github.io/) documentation for the component documentation.\n\n## Examples\n\n```hint|neutral\nClick the <> on the right to view the sample source.\n```\n\n### Buttons\n\n```hint|directive\nPrefer to use [the non-Bootstrap button component](/button/variations). It\'s lighter weight and does not depend on a global stylesheet.\n```\n\n```react\nshowSource: false\n---\n<div>\n\t<RowWithMargin>\n\t\t<Button className="m-1" color="primary">Primary</Button>\n\t\t<Button className="m-1" color="primary" outline>Outline</Button>\n\t\t<Button className="m-1" color="link">link</Button>\n\t</RowWithMargin>\n\t<RowWithMargin>\n\t\t<div><Button className="m-1" color="primary" size="sm">Small</Button></div>\n\t\t<div><Button className="m-1" color="primary" size="md">Medium</Button></div>\n\t\t<div><Button className="m-1" color="primary" size="lg">Large</Button></div>\n\t</RowWithMargin>\n</div>\n```\n\n### Button with Dropdown\n\n```react\nshowSource: false\nstate: { isOpen: false }\n---\n<div>\n<ButtonDropdown isOpen={state.isOpen} toggle={() => setState({ isOpen: !state.isOpen })}>\n\t<Button id="caret" color="primary">Split Button</Button>\n\t<DropdownToggle caret color="primary" />\n\t<DropdownMenu>\n\t\t<DropdownItem header>Header</DropdownItem>\n\t\t<DropdownItem disabled>Action</DropdownItem>\n\t\t<DropdownItem>Another Action</DropdownItem>\n\t\t<DropdownItem divider/>\n\t\t<DropdownItem>Another Action</DropdownItem>\n\t</DropdownMenu>\n</ButtonDropdown>\n</div>\n```\n\n\n## Forms\n\n```react\nshowSource: false\n---\n<div>\n\t<Form>\n\t\t<FormGroup>\n\t\t\t<Label for="exampleCheckbox">Checkboxes</Label>\n\t\t\t<div>\n\t\t\t\t<CustomInput type="checkbox" id="exampleCustomCheckbox" label="Check this custom checkbox" />\n\t\t\t\t<CustomInput type="checkbox" id="exampleCustomCheckbox2" label="Or this one" />\n\t\t\t\t<CustomInput type="checkbox" id="exampleCustomCheckbox3" label="But not this disabled one" disabled />\n\t\t\t</div>\n\t\t</FormGroup>\n\t\t<FormGroup>\n\t\t\t<Label for="exampleCheckbox">Radios</Label>\n\t\t\t<div>\n\t\t\t\t<CustomInput type="radio" id="exampleCustomRadio" name="customRadio" label="Select this custom radio" />\n\t\t\t\t<CustomInput type="radio" id="exampleCustomRadio2" name="customRadio" label="Or this one" />\n\t\t\t\t<CustomInput type="radio" id="exampleCustomRadio3" label="But not this disabled one" disabled />\n\t\t\t</div>\n\t\t</FormGroup>\n\t\t<FormGroup>\n\t\t\t<Label for="exampleCheckbox">Inline</Label>\n\t\t\t<div>\n\t\t\t\t<CustomInput type="checkbox" id="exampleCustomInline" label="An inline custom input" inline />\n\t\t\t\t<CustomInput type="checkbox" id="exampleCustomInline2" label="and another one" inline />\n\t\t\t</div>\n\t\t</FormGroup>\n\t\t<FormGroup>\n\t\t\t<Label for="exampleEmail">Input without validation</Label>\n\t\t\t<Input />\n\t\t\t<FormFeedback>You will not be able to see this</FormFeedback>\n\t\t\t<FormText>Example help text that remains unchanged.</FormText>\n\t\t</FormGroup>\n\t\t<FormGroup>\n\t\t\t<Label for="exampleEmail">Valid input</Label>\n\t\t\t<Input valid />\n\t\t\t<FormFeedback valid>Sweet! that name is available</FormFeedback>\n\t\t\t<FormText>Example help text that remains unchanged.</FormText>\n\t\t</FormGroup>\n\t\t<FormGroup>\n\t\t\t<Label for="examplePassword">Invalid input</Label>\n\t\t\t<Input invalid />\n\t\t\t<FormFeedback>Oh noes! that name is already taken</FormFeedback>\n\t\t\t<FormText>Example help text that remains unchanged.</FormText>\n\t\t</FormGroup>\n\t</Form>\n</div>\n```\n\n### Popover\n\n```react\nstate: { isOpen: false }\n---\n<div>\n\t<Button id="Popover1" onClick={() => setState({ isOpen: !state.isOpen })}>\n\t\tLaunch Popover\n\t</Button>\n\t<Popover placement="bottom" isOpen={state.isOpen} target="Popover1" toggle={() => setState({ isOpen: !state.isOpen })}>\n\t\t<PopoverHeader>Popover Title</PopoverHeader>\n\t\t<PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>\n\t</Popover>\n</div>\n```\n'}});
//# sourceMappingURL=32.a31d28ec.chunk.js.map