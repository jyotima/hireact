import * as React from 'react';
interface ICustomProps {
  txt: string;
}
export class App extends React.Component<ICustomProps, void> {
  public render(): JSX.Element {
    let txt = this.props.txt;
    return <div><h1>{txt}</h1></div>;
  }
}
export default App;