# WalkerTexas-coder.github.io
A visible HTML and CSS project
{
  font-family: 'Roboto Slab', serif;
}

body{
  background-image: url(https://lp-cms-production.imgix.net/features/2015/03/ChoseCaribbeanIsland-64828293c8fe.jpg?auto=compress&fit=crop&fm=auto&sharp=10&vib=20&w=1200&h=800);
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}

h1{
  font-size: 80px;
  font-weight: bold;
  padding: 10px;
  color: #cce0ff;
  text-shadow: 2px 2px #000;
  animation: bounceIn 4s ease-in;
  animation-direction: alternate;
  animation-timing-function: ease-in-out;
  text-align: center;
}

@keyframes bounceIn{
  0%{
    transform: scaleX(0.5);
    opacity: 0;
  }
  60%{
    transform: scaleX(1.2);
    opacity: 1;
  }
  100%{
    transform: scaleX(1);
  }
}

#treasure-pic{
  text-align: center;
}

#rules-section{
  color: #cce0ff;
  text-shadow: 2px 2px #000;
  font-size: 18px;
   text-align: center; 
  list-style-position: inside;
}

#gameboard{
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  background: transparent;
}



table{
  border: 2px solid black;
  background-color: #fff;
}

td{
  border: 2px solid black;
  font-size: 100px;
  height: 150px;
  width: 150px;
}

td:hover{
  color: #cce0ff;
}

#outcome{
  text-align: center;
  font-size: 100px;
  color: #cce0ff;
  text-shadow: 2px 2px #000;
}

#bottom-section{
  color: #cce0ff;
  text-shadow: 2px 2px #000;
  text-align: center;
  font-size: 20px;
}

button{
  margin: 10px;
  padding: 20px;
  font-size: 30px;
  background-color: #fff;
  border-radius: 30px;
  border: 2px solid black;
}

button:hover{
  background-color: #cce0ff;
}

a:hover{
  color: #cce0ff;
} */