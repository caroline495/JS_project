import { createPieChart } from "./pieDataVisual";
import { createHorizBarChart } from "./horizBarChartVisual";

class View {

    constructor(dateBegin, dateEnd){
        this.dateBegin = dateBegin;
        this.dateEnd = dateEnd;

        this.setup();
    }

    getArtistChart() {
       const fileNameKey = {"999": "beforeAD_1000_top_artists", 
                            "1399": "1000_1399AD_top_artists",
                            "1599": "1400_1599AD_top_artists",
                            "1799": "1600_1799AD_top_artists",
                            "1899": "1800_1899AD_top_artists",
                            "2024": "1900_2024AD_top_artists"}; 
    
        createHorizBarChart(fileNameKey[this.dateEnd]);

    }
    
    setup() {
       // 1) populate pie chart for time period
        // - call numHighlights / total works in that time period 
        //      - populate pie chart with (numHighlights, numNotHighlights)
        this.numHighlights();    
        // 2) populate horiz bar chart with appropriate fileName for top artists
        this.getArtistChart();

        this.displaySelectedWork();
    }
    
    numHighlights(){
        const shareHighlightsKey = 
        {"999": {highlight: 442, notHighlight: 84309}, 
        "1399": {highlight: 192, notHighlight: 11088},
        "1599": {highlight: 260, notHighlight: 29854},
        "1799": {highlight: 446, notHighlight: 87929},
        "1899": {highlight: 549, notHighlight: 130483},
        "2024": {highlight: 888, notHighlight: 138516} }; 

        createPieChart(shareHighlightsKey[this.dateEnd].highlight, shareHighlightsKey[this.dateEnd].notHighlight);
        
        // fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&dateBegin=${this.dateBegin}&dateEnd=${this.dateEnd}&q=*`)
        // .then(response => {
        // if (response.ok) {
        //     return response.json();
        // } else {
        //     throw new Error(response);
        // }
        // })
        // .then(
        //   data => {
        //     console.log("Success!");
        //     console.log(data);
        //     console.log(data["total"], "num");
        //     let num = data["total"];

        //     return num;
        // },
        // errorResponse => {
        //     console.log("Failure!");
        //     console.log(errorResponse);
        // })
        // .then( 
        //   num => {

        //     fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?dateBegin=${this.dateBegin}&dateEnd=${this.dateEnd}&q=*`)
        //     .then(response => {
        //         console.log("here");
        //         return response.json()
        //     })
        //     .then(response => {
        //        console.log(response.total,"total");
        //         console.log(num, "num");
        //         return [num, response.total]
        //     })
        //     .then((res) => {
        //         createPieChart(res[0], res[1]);
        //     });
        //   }

        // )
    }

    displaySelectedWork () {
        const SelectedWorkKey = 
        {"999": {title: "The Temple of Dendur", 
                url: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/547802/1223802/main-image", 
                artist: "Unknown",
                date:"completed by 10 B.C., Egypt",
                medium:"Aeolian sandstone",
                location:"On view at The Met Fifth Avenue in Gallery 131",
                descriptionText: "Egyptian temples were not simply houses for a cult image but also represented, in their design and decoration, a variety of religious and mythological concepts. One important symbolic aspect was based on the understanding of the temple as an image of the natural world as the Egyptians knew it. Lining the temple base are carvings of papyrus and lotus plants that seem to grow from water, symbolized by figures of the Nile god Hapy. The two columns on the porch rise toward the sky like tall bundles of papyrus stalks with lotus blossoms bound with them. Above the gate and temple entrance are images of the sun disk flanked by the outspread wings of Horus, the sky god. The sky is also represented by the vultures, wings outspread, that appear on the ceiling of the entrance porch."}, 
        
        
        "1399": {title: "Wine Ewer with Chrysanthemums and Lotus Flowers", 
                artist: "Unknown",
                date:"first half of the 13th century, Korea",
                medium:"Stoneware with inlaid decoration under celadon glaze",
                location:" On view at The Met Fifth Avenue in Gallery 204",
                url: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/50356/180977/main-image", 
                descriptionText: "The inlaid patterns that decorate this ewer were created by etching the motifs into a body, filling in the carved space with black and/or white slip, and then firing the entire vessel with a celadon glaze."},
        
        "1599": {title: "The Unicorn Rests in a Garden (from the Unicorn Tapestries)", 
                artist: "Unknown, Made in Paris, France (cartoon); Made in Southern Netherlands (woven)",
                date:" 1495–1505",
                medium:"Wool warp with wool, silk, silver, and gilt wefts",
                location:" On view at The Met Cloisters in Gallery 17",
                url: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/467642/940931/main-image", 
                descriptionText: "The seven individual hangings known as 'The Unicorn Tapestries', are among the most beautiful and complex works of art from the late Middle Ages that survive. Luxuriously woven in fine wool and silk with silver and gilded threads, the tapestries vividly depict scenes associated with a hunt for the elusive, magical unicorn."},
        
        
        "1799": {title: "Young Woman with a Water Pitcher", 
                artist: "Johannes Vermeer (Dutch, Delft 1632–1675 Delft)",
                date: "ca. 1662",
                medium:"Oil on canvas",
                location:"On view at The Met Fifth Avenue in Gallery 614",
                url: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/437881/1476893/main-image", 
                descriptionText: "Standing at an open window, a woman begins her day with ablutions from a gilt silver pitcher and basin, with linen coverings protecting her dress and hair. The first work by Vermeer to enter an American collection, this painting embodies the artist’s interest in domestic themes, giving an almost voyeuristic glimpse into the private life of a woman before she presents her public face to the world."},
        
        "1899": {title: "Self-Portrait with a Straw Hat (obverse: The Potato Peeler)", 
                artist: "Vincent van Gogh (Dutch, Zundert 1853–1890 Auvers-sur-Oise)",
                date: "1887",
                medium:"Oil on canvas",
                location:"On view at The Met Fifth Avenue in Gallery 825",
                url: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/436532/1671316/main-image", 
                descriptionText: "Van Gogh produced more than twenty self-portraits during his Parisian sojourn (1886–88). Short of funds but determined nevertheless to hone his skills as a figure painter, he became his own best sitter: 'I purposely bought a good enough mirror to work from myself, for want of a model.' This picture, which shows the artist's awareness of Neo-Impressionist technique and color theory, is one of several that are painted on the reverse of an earlier peasant study."},
        
        "2024": {title: "Autumn Rhythm (Number 30)", 
                artist: "Jackson Pollock (American, Cody, Wyoming 1912–1956 East Hampton, New York)",
                date: "1950",
                medium:"Enamel on canvas",
                location:"On view at The Met Fifth Avenue in Gallery 919",
                url: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/488978/1012539/restricted", 
                descriptionText: "The Met acquired this monumental 'drip' painting by Pollock in 1957, the year following the artist's unexpected death—a sign of how quickly his reinvention of painting was accepted into the canon of modern art. However revolutionary in technique, Pollock’s large-scale work was rooted in the muralism of the 1930s, including the art of Thomas Hart Benton (see America Today, MMA 2012.478a–j) and David Alfaro Siqueiros, both of whom he had worked alongside. Pollock proclaimed in 1947: 'I intend to paint large movable pictures which will function between the easel and the mural. . . . the tendency of modern feeling is towards the wall picture or mural.' This work's title suggests not only the month in which he painted it (October), but also an alignment with nature's constant flux."}}; 
        
        // could use replaceChildren(children), or createElement() and append()
        
        const newTitle = document.createElement("li");
        newTitle.innerText = SelectedWorkKey[this.dateEnd].title;  

        const br = document.createElement("br");
        
        const artist = document.createElement("p");
        artist.innerText = "Artist: "+ SelectedWorkKey[this.dateEnd].artist;

        const date = document.createElement("p");
        date.innerText = "Date: " + SelectedWorkKey[this.dateEnd].date;

        const medium = document.createElement("p");
        medium.className = "medium";
        medium.innerText = "Medium: " + SelectedWorkKey[this.dateEnd].medium;

        const location = document.createElement("p");
        location.className = "location";
        location.innerText = "Met location: " + SelectedWorkKey[this.dateEnd].location;

        const image = document.createElement("img");
        image.id = "selected-work-image";
        image.setAttribute("src", SelectedWorkKey[this.dateEnd].url);
        
        const description = document.createElement("p");
        description.className = "description";
        description.innerText = "Description: " + SelectedWorkKey[this.dateEnd].descriptionText;

        const parent = document.querySelector(".works");
        parent.replaceChildren(newTitle, br, artist, date, medium, location, image, description);
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

        fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?dateBegin=${this.dateBegin}&dateEnd=${this.dateEnd}&q=*`)
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


export default View;