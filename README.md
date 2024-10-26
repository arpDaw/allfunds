# Technical test - Allfunds

## Project Description

This project is a technical test demonstration of a full-stack application. It consists of two pages:

<ol>
<li>
<strong>News feed:</strong> Displays a list of different articles fetched from the database by calling the API endpoint that retrieves them. This articles can be archived.
</li>
<li>
<strong>Archived news:</strong> Displays a different list of articles that are also fetched from the DB but that have been archived. These can be permanently deleted.
</li>
</ol>

## Tech stack

<ol>
<li>A <strong>frontend</strong> built using <strong>Angular</strong> and styled with <strong>Bootstrap</strong>.</li>
<li>The backend is powered by <strong>Node.js</strong> and <strong>Express.js</strong> to handle the server-side logic with different <strong>API</strong> endpoints.
</li>
<li>
As for the <strong>database</strong> I used an atlas <strong>mongoDB</strong> cluster to manage stored data.
</li>
</ol>

## Dependencies

<ul>
<li>
<strong>Node.js:</strong> v20.16.0
</li>
<li>
<strong>Angular:</strong>  17.3.10 
</li>
<li>
<strong>Boostrap:</strong> 5.3.3
</li>
<li>
<strong>Express:</strong> 4.21.1
</li>
<li>
<strong>Mongod:</strong> 2.0.0
</li>
<li>
<strong>Cors:</strong> 2.8.5
</li>
</ul>

## Setup and Installation

<ol>
<li>
<strong>Clone the repository:</strong> Start by cloning the project.
<ul>
<li><strong>git clone</strong> https://github.com/arpDaw/allfunds</li>
</ul>
</li>
<li>
<strong>Frontend:</strong>
<ul>
<li><strong>cd news: </strong>Navigate to <strong>news</strong> directory.</li>
<li><strong>npm install</strong></li>
</ul>
</li>
<li>
<strong>Backend:</strong>
<ul>
<li><strong>cd api-news: </strong>Navigate to <strong>api-news</strong> directory.</li>
<li><strong>npm install</strong></li>
</ul>

</li>
</ol>

## How to launch

<ol>
<li>
<strong>Frontend:</strong>
<ul>
<li><strong>cd news: </strong>Navigate to <strong>news</strong> directory.</li>
<li><strong>ng serve: </strong>Launch frontend application on the <strong>4200 port</strong>.</li>
</ul>
</li>
<li>
<strong>Backend:</strong>
<ul>
<li><strong>cd api-news: </strong>Navigate to <strong>api-news</strong> directory.</li>
<li><strong>node index.js: </strong>Launch backend server on the <strong>9909 port</strong>.</li>
</ul>

</li>
<li>
<strong>MongoDB Connection:</strong>
<ul>
<li><strong>connectionString</strong> will be provided in the <strong>secret.js</strong> file, which contents shall be privately shared via email.</li>
<li><strong>secret.js</strong> file must be placed in the <strong>api-news</strong> directory.</li>
</ul>
</li>
</ol>

If you reach this part and you've read everything, thanks for taking the time to do so.

v 1.0 - 26/10/2024
