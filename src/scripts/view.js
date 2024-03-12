class View {
    // View for each time period:
    // Show % highlights among total number of works 
    //  - pie chart for this with % highlights vs. non highlights (show specific numbers in hover description)

    // Show top artists (artists with the most works)

    // Show % of regions represented 
    // Show makeup of Years of Accession

    // eventlistener for click

    constructor(dateBegin, dateEnd){
        this.dateBegin = dateBegin;
        this.dateEnd = dateEnd;
    }

    // setup() {
    //     const buttons = document.querySelector('.time-periods');
    //     console.log(buttons);
    //     let timeStart;
    //     let timeEnd;

    //     buttons.addEventListener('click', event => {
    //         console.log(event.target); 
    //         if (event.target.nodeName === "LI") {
    //             console.log(event.target.innerText);
    //             // console.log(event.target.getAttribute("data-time-start"));
    //             // console.log(event.target.getAttribute("data-time-end"));
    //             timeStart = event.target.getAttribute("data-time-start");
    //             timeEnd = event.target.getAttribute("data-time-end");
    //         }; 
    //     });
    //     this.dateBegin = timeStart;
    //     this.dateEnd = timeEnd;
    // }
    
    // Returns the number of highlights from time period
    numHighlights(){
        fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&dateBegin=${this.dateBegin}&dateEnd=${this.dateEnd}&q=*`)
        .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error(response);
        }
        })
        .then(
        data => {
            console.log("Success!");
            console.log(data);
            console.log(data["total"], "num");
            let num = data["total"];
            return num;
        },
        errorResponse => {
            console.log("Failure!");
            console.log(errorResponse);
        })
    }

    // Helper Method to add each value from a field of an object to an array
    addToArray(object, field) {
        if (!object[field]) {
            object[field] = 1;
        } else {
            object[field] += 1;
        }
        return object
    }

    // Right now: gets the top 10ish artists who have works that are highlights in the collection, between the time period of the View
    // NOTE - ON HIGHLIGHTS, since dataset is too large...
    // Search by criteria
    // returns an array of object IDs that match criteria, iterate through each object by id through another fetch & get at artist, collect that info into an array
    getArtists() {
        let artists = {};
        let sum = 0;

        fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&dateBegin=${this.dateBegin}&dateEnd=${this.dateEnd}&q=*`)
        .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error(response);
        }
        })
        .then(
        data => {
            console.log("Success!");
            console.log(data);
            let set = [...data["objectIDs"]];
            return set;
        },
        errorResponse => {
            console.log("Failure!");
            console.log(errorResponse);
        })
        .then(data => {
            
            data.forEach((element, idx) => {
                //if (idx < 10) {
                fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${element}`)
                .then(response => {
                    console.log("here");
                    return response.json()
                })
                .then(response => {
                    // console.log("here2");
                    // console.log(response, idx);
                    // console.log(response.artistDisplayName);
                    this.addToArray(artists, response.artistDisplayName);
                    
                    if (idx === data.length - 1) {
                        console.log(artists, "artists");
                        Object.values(artists).forEach(ele => {
                            sum += ele;
                        })
                        console.log(sum, "sum");
                        let arr = Object.entries(artists).slice();
                        arr.sort((a, b) => b[1] - a[1]);
                        console.log(arr.slice(0,14));
                    }
                });
                //}
            })
            return artists;
        })

    }

    // Gets top 10ish years of works acquired (among the highlights)
    // probably makes sense to refactor to show by different year buckets, for data that makes more sense to read/see
    getYears() {
        let years = {};
        let sum = 0;

        fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&dateBegin=${this.dateBegin}&dateEnd=${this.dateEnd}&q=*`)
        .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error(response);
        }
        })
        .then(
        data => {
            console.log("Success!");
            console.log(data);
            let set = [...data["objectIDs"]];
            return set;
        },
        errorResponse => {
            console.log("Failure!");
            console.log(errorResponse);
        })
        .then(data => {
            
            data.forEach((element, idx) => {
                //if (idx < 10) {
                fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${element}`)
                .then(response => {
                    console.log("here");
                    return response.json()
                })
                .then(response => {
                    this.addToArray(years, response.accessionYear);
                    
                    if (idx === data.length - 1) {
                        console.log(years, "years");
                        Object.values(years).forEach(ele => {
                            sum += ele;
                        })
                        console.log(sum, "sum");
                        let arr = Object.entries(years).slice();
                        arr.sort((a, b) => b[1] - a[1]);
                        console.log(arr.slice(0,14));
                    }
                });
                //}
            })
            return years;
        })

    }

    // Gets the top 14 countries 
    // probably makes sense to refactor to show by different year buckets, for data that makes more sense to read/see
    getCountry() {
        let countries = {};
        let sum = 0;

        fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&dateBegin=${this.dateBegin}&dateEnd=${this.dateEnd}&q=*`)
        .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error(response);
        }
        })
        .then(
        data => {
            console.log("Success!");
            console.log(data);
            let set = [...data["objectIDs"]];
            return set;
        },
        errorResponse => {
            console.log("Failure!");
            console.log(errorResponse);
        })
        .then(data => {
            
            data.forEach((element, idx) => {
                //if (idx < 10) {
                fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${element}`)
                .then(response => {
                    console.log("here");
                    return response.json()
                })
                .then(response => {
                    this.addToArray(countries, response.country);
                    
                    if (idx === data.length - 1) {
                        console.log(countries, "countries");
                        Object.values(countries).forEach(ele => {
                            sum += ele;
                        })
                        console.log(sum, "sum");
                        let arr = Object.entries(countries).slice();
                        arr.sort((a, b) => b[1] - a[1]);
                        console.log(arr.slice(0,14));
                    }
                });
                //}
            })
            return countries;
        })

    }

    // Gets the 14 departments distribution (among the highlights)
    getDepartments() {
        let departments = {};
        let sum = 0;

        fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&dateBegin=${this.dateBegin}&dateEnd=${this.dateEnd}&q=*`)
        .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error(response);
        }
        })
        .then(
        data => {
            console.log("Success!");
            console.log(data);
            let set = [...data["objectIDs"]];
            return set;
        },
        errorResponse => {
            console.log("Failure!");
            console.log(errorResponse);
        })
        .then(data => {
            
            data.forEach((element, idx) => {
                //if (idx < 10) {
                fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${element}`)
                .then(response => {
                    console.log("here");
                    return response.json()
                })
                .then(response => {
                    this.addToArray(departments, response.department);
                    
                    if (idx === data.length - 1) {
                        console.log(departments, "departments");
                        Object.values(departments).forEach(ele => {
                            sum += ele;
                        })
                        console.log(sum, "sum");
                        let arr = Object.entries(departments).slice();
                        arr.sort((a, b) => b[1] - a[1]);
                        console.log(arr.slice(0,14));
                    }
                });
                //}
            })
            return departments;
        })

    }

}





// -----------------------------------------


// dataset = fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&dateBegin=${dateBegin}&dateEnd=${dateEnd}&q=*`)
//   .then(response => {
//     if (response.ok) {
//       return response.json();
//     } else {
//       throw new Error(response);
//     }
//   })
//   .then(
//     data => {
//       console.log("Success!");
//       console.log(data);
//     //   console.log(data["objectIDs"]);
//       set = [...data["objectIDs"]];
//       console.log("this is dataset");
//       console.log(set, "hello");
//       return collectData(set);
//     },
//     errorResponse => {
//       console.log("Failure!");
//       console.log(errorResponse);
//     }
//   );


export default View;