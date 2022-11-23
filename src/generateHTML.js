const fs = require("fs");
const generateHTML = `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="style.css">
      <title>My Team</title>
    </head>
    <body>

    <header>
        <h1 class="">My Team</h1>
    </header>

    <main>
    <div class="card">

    </div>

    </main>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
	<script src="../src/generateEmployeeCard.js"></script>
    </body>
    </html>`;

const createHTML = () => {
	fs.writeFile("./dist/index.html", generateHTML, (err) =>
		err ? console.log(err) : console.log("Successfully created index.html!")
	);
}

module.exports = { createHTML };
