import * as React from 'react';
import * as ReactDOM from 'react-dom';
interface ICustomProps {
  txt?: string;
  cat: number
}

class App extends React.Component<ICustomProps, void> {
  public static defaultProps: Partial<ICustomProps> = {
        txt: "default"
    };
  public render(): JSX.Element {
    let txt = this.props.txt;
    let cat = this.props.cat;
    return <div><h1>{txt}</h1><h2>{cat}</h2></div>;
  }
}

export { App };