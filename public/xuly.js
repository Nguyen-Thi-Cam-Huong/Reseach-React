const Myelement = (
  <table>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <td>John</td>
    </tr>
    <tr>
      <td>Elsa</td>
    </tr>
  </table>
);

class Menu extends React.Component{
       render(){
      return (
        <div>
        <ul>
        <li>home</li>
        <li>about us</li>
        <li>contact us</li>
        </ul>
        </div>
    )}
};
class KhoaPham extends React.Component{
       render(){
      return (
        <div>
        <h1 className="test123">ReactJs</h1>
        <h1 className="mauvang">ReactJs Document</h1>
        <h1 className="mauvang">ReactJs Example</h1>
        <Menu/>
        </div>
    )}
};

ReactDOM.render(
    <Menu />,
   document.getElementById('root')
);
