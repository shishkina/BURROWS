console.log('Hello Campers!!!  Manage the campsite');


function projectData(campsite, data) {

  campsite.selectAll('li')  //  Find all the existing tents
          .data(data)   // See what campers we have...
          .enter()         // Check to see how many new tents are needed
          .append('li');   // Build needed tents

  campsite.selectAll('li') //  Find all the existing tents
          .data(data) // See what campers we have...
          .text((camper) => `${camper} sleeps here`); // place campers in tents

  campsite.selectAll('li') //  Find all the existing tents
          .data(data) // See what campers we have...
          .exit()     // Check to see how many tents can be removed
          .remove();  // remove the tents
}

const campsite = d3.select('#campsite');  // Grab the campsite
projectData(campsite, ['Joy']);

setTimeout(() => {
    projectData(campsite, ['Joy', 'Lichard', 'Omily']);
}, 1000);

setTimeout(() => {
    projectData(campsite, ['Lichard']);
}, 2000);

setTimeout(() => {
    projectData(campsite, ['Lichard', 'Kathew']);
}, 3000);

setTimeout(() => {
    projectData(campsite, ['Kathew']);
}, 4000);
//
