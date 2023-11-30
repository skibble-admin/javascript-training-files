const express = require('express');
const app = express();

const html = `
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Web Page</title>
    </head>
    <style>
        header{
            background-color: aliceblue;
            height: 880;
            width:500;
        }
        image{  
       background-color: antiquewhite;
       width:200;
       margin:40;
        }
    </style>
    <body>
        <header>
         <h2>I am Vinitha pilli</h2>
         <image>
         <img class="image" src="https://static.vecteezy.com/system/resources/previews/002/530/475/large_2x/woman-face-logo-free-vector.jpg" width=200 />
         </image>
         <h3>Details</h3>
         <table>
         <tableborder="1"><tr>
            <th width="10%">Nme </th>
            <td width="5%">:</td>
            <td width="22%">Vinitha Pilli</td>
            </tr>
            <tr>
             <th width="10%">DOB </th>
                    <td width="5%">:</td>
                    <td width="22%">12-02-2002</td>
                    </tr>
                    <tr>
            <tr>
            <th width="10%">phone no </th>
            <td width="5%">:</td>
            <td width="22%">555*******</td>
            </tr>
            <tr>
                <th width="10%">Email </th>
                <td width="5%">:</td>
                <td width="22%">vinithapilli@gmail.com</td>
                </tr>
                <tr>
                    <th width="10%">location </th>
                    <td width="5%">:</td>
                    <td width="22%">siddipet,Telangana</td>
                    </tr>
         </table>
         <h3>skills</h3>
         <ul>
            <li>Excellent Communication skills</li>
            <li>ability to work independently and in a team environment</li>
            <li>html,css,java script programming languages</li>
         </ul>
         <div>
            <h3 class="heading">Education</h3>
            <p><b>Btech: CSE(computer Science Engineering)</b></br> DRK institute of Science and Technology (2020 - 2024)</p>
            <p><b>Intermediate: MPC</b></br>Mater Minds junior college(2018-2010)</p>
            <P><b>10th: SSC</b><br>Spring Dales Grammar High School(2018)</P>         
          </div>
          <h3>Summary</h3>
          <p>To obtain the position of a Chat Support Executive in a reputable companywhere
            I can utilize my Communication skills, eagerness to learn.
          </p>
         </header>
        
    </body>
</html>`;
const projectHTML = `<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <a href="./assignment_0/index.html">Bio-Data</a><br>
    <a href="./assignment_1/index.html">Strings</a><br>
    <a href="./assignment_2/index.html">Increment/Decrement</a><br>
    <a href="./assignment_3/index.html">Gallery</a>

</body>
</html>
`
app.get('/', function (req, res) {
  res.send(html);
})

app.get('/about',(req,res)=>{
    res.send('I am a student')
})

app.get('/projects',(req,res)=>{
    res.send(projectHTML);
})

app.listen(80);