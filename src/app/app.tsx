import * as React from 'react';
interface ICustomProps {
  txt: string;
  cat: string;
}
export class App extends React.Component<ICustomProps, void> {
  public render(): JSX.Element {
    let txt = this.props.txt;
    let cat = this.props.cat;
    return <div><h1>{txt}</h1><h2>{cat}</h2></div>;
  }
}
export default App;