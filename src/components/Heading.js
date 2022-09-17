import React from "react";
import "./Heading.css";

class Heading extends React.Component {
  render() {
    return ( 
      <div style={{ backgroundColor: "rgb(255,0,255)"}}>
        <h1>Stock Performance Analyzer</h1>
        <p>
          Have you ever woken up in the middle of the night in a cold sweat and full of regret because you didn't invest
          in Amazon when it was a small book company? Well, if this happens to be the case, you can feel that regret
          with other investments too! 😎 With this little app, you will be able to select an investment and see how
          well it performed with a given date range. Here's some info to get you started:
        </p>
        <ul className="button-info-list">
          <li>
            Clicking the <span className="button-info">Stocks</span> button will list the available stocks to choose
            from.
          </li>
          <li>
            The <span className="button-info">Amount</span> field is the number of stocks that you wish to purchase.
          </li>
          <li>
            Clicking the <span className="button-info">Begin Year</span> button will drop down a list of years that the
            stock has existed for. The year entered represents the date in which you purchased a particular investment.
          </li>
          <li>
            Similarly, the <span className="button-info">End Year</span> button will list the years after the&nbsp;
            <span className="button-info">Begin Year</span> that the stock has existed for. This represents the day in
            which you sold an investment.
          </li>
        </ul>
        <p>
          The line graph below shows how the stock performed over time. When the&nbsp;
          <span className="button-info">Begin Year</span> and the <span className="button-info">End Year</span> are
          selected, vertical lines are drawn to highlight these years. Below that, you can see how well that investment
          performed and what it's worth now.
        </p>
      </div>
    );
  }
}

export default Heading;