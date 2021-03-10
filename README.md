# search-index-pwa-basics
Will contain two main things:
* A Service worker and a shared worker to help create PWAs based on search-index
* Opinionated code to help create search solutions easier

For the last part: [`search-index`](https://github.com/fergiemcdowall/search-index) is not an opinionated search engine library. It consists of all the small parts you can use to build highly different search engines or search solutions. `Search-index-pwa-basics` is making more assumptions on what developers want to do and makes those tasks easier. Part of that is using [`daq-proc`](https://github.com/eklem/daq-proc) to simplify stuff.

## Functions to be

### service worker - indexWorker.js
* [ ] Upload JSON file
* [ ] Fetch JSON file from URL
* [ ] Index an array of objects
* [ ] Delete an index
* [ ] Export an index
* [ ] Status communication to application

### shared worker - queryWorker.js
* [ ] Query search engine (OR)
* [ ] Query search engine (AND)
* [ ] Query suggestion
* [ ] Show filters
* [ ] Filter on filters

Ideas, question and PR's (when that falls naturally) are more than welcome =)
