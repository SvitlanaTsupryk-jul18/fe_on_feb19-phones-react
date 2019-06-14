import React from 'react';

const Basket = (props) => (
  <section>
    <p>Shopping Cart</p>
    <ul>
      {props.items.map((item, index) => (
        <li key={index}>
          {item}
          <button
            onClick={() => {
              // console.log(item, index);
              props.onDellItem(item);
            }}
          >x</button>
        </li>
      ))}
    </ul>
  </section>
);

export default Basket;



// class Basket extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       mainImage: props.phone.images[0],
//     };
//   }

//   render() {
//     return (
//       <section>
//         <p>Shopping Cart</p>
//         <ul>
//           {this.props.items.map((item, index) => (
//             <li key={index}>
//               {item}
//               <button
//                 onClick={() => {
//                   console.log(item, index);
//                   this.props.items.filter(phone => phone === item);
//                   console.log(this.props.items)
//                 }}
//               >x</button>
//             </li>
//           ))}
//         </ul>
//       </section>)
//   }
// };

