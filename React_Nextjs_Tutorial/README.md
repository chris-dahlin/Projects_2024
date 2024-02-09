Class from NextJS for React

https://nextjs.org/learn/react-foundations/getting-started-with-react



A template literal:

function Header({ title }) {
  return <h1>{`Cool ${title}`}</h1>;
}



An object property with dot notation:

function Header(props) {
  return <h1>{props.title}</h1>;
}



The returned value of a function:

function createTitle(title) {
  if (title) {
    return title;
  } else {
    return 'Default title';
  }
}
 
function Header({ title }) {
  return <h1>{createTitle(title)}</h1>;
}


Or ternary operators:
function Header({ title }) {
  return <h1>{title ? title : 'Default Title'}</h1>;
}


You can now pass any string to your title prop, or, if you used the ternary operator, you could even not pass a title prop at all, since you've accounted for the default case in your component:

function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}
 
function HomePage() {
  return (
    <div>
      <Header />
    </div>
  );
}

Your component now accepts a generic title prop which you can reuse in different parts of your application. All you need to do is change the title string:

function HomePage() {
  return (
    <div>
      <Header title="React" />
      <Header title="A new title" />
    </div>
  );
}