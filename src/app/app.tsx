import * as React from 'react';
import * as ReactDOM from 'react-dom';
interface ICustomProps {
  txt: string;
  cat: number
}

class App extends React.Component<ICustomProps, void> {
  public render(): JSX.Element {
    let txt = this.props.txt;
    let cat = this.props.cat;
    return <div><h1>{txt}</h1><h2>{cat}</h2></div>;
  }
}

const App1: React.StatelessComponent<ICustomProps> = ({txt = "default", cat}) => {
  return (
    <span>Hello, {txt}, {cat}</span>
  );
};


export { App, App1 };