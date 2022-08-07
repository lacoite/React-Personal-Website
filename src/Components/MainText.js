import React, { useState, useEffect } from 'react';
import './MainText.css';
  

const textLoop = [
  <p>package PersonalWebsite;<br/><br/>
   public class PersonalWebsite &#123; <br/>
  &emsp; public static void main(String args []) &#123;<br/>
  &emsp;&emsp;&emsp;  latashaCooper();<br/>
  &emsp;&emsp;&emsp; //function launches personal website<br/>
  &emsp; &#125;<br/>
  &#125;
  </p>,
  <p>#include &#60;personalWebsite.h&#62;<br/><br/>
  int main() &#123; <br/>
    &emsp; latashaCooper();<br/>
    &emsp; //function launches personal website&emsp;<br/>
    &emsp; return;<br/>
    &#125;
  </p>
  ];

function MainText() {
  const [index, setIndex] = useState(0);
  
  useEffect(() => {
    //const intervalDelayMiliseconds = textLoop[index].length * 30;
    const intervalDelayMiliseconds = 3000;
    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        return prevIndex + 1 < textLoop.length? prevIndex + 1 : 0;
      });
    }, intervalDelayMiliseconds);
  return () => clearInterval(interval);
  });


  return(

    <h1>{textLoop[index]}</h1>
  
    )
}

export default MainText;