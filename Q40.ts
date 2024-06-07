// Question: Album: Write a function called make_album() that builds a Object describing a music album. 
// The function should take in an artist name and an album title, and it should return a Object containing these 
// two pieces of information. Use the function to make three dictionaries representing different albums. 
// Print each return value to show that Objects are storing the album information correctly. 
// Add an optional parameter to make_album() that allows you to store the number of tracks on an album. 
// If the calling line includes a value for the number of tracks, add that value to the album’s Object. 
// Make at least one new function call that includes the number of tracks on an album.


// Ans:
function makeAlbum(artistName:string , albumTitle:string){
    return {artistName , albumTitle}
}

let album1 = makeAlbum("atifaslam" , "pakistani songs")
let album2 = makeAlbum("arijit singh" , "bollywood songs")
let album3 = makeAlbum("honey singh" , "hollywood songs")

console.log(album1)
console.log(album2)
console.log(album3)


function makeAlbum1(artistName:string , albumTitle:string , trackNumber:number){
    return {artistName , albumTitle , trackNumber}
}

let album4 = makeAlbum1("atifaslam" , "pakistani songs" , 39)
let album5 = makeAlbum1("arijit singh" , "bollywood songs" , 40)
let album6 = makeAlbum1("honey singh" , "hollywood songs" , 67)

console.log(album4)
console.log(album5)
console.log(album6)