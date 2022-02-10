class Video {
    constructor(parent, resultObject){
        const {link, thumbnail, title, creator, duration} = resultObject;

        
        
        let newVid = document.createElement('div') 
        newVid.setAttribute('class', 'result-block')
        
        let anchorTag = document.createElement('a')
        anchorTag.setAttribute('href', link);
        anchorTag.setAttribute('class', 'card-link');
        anchorTag.setAttribute('target', '_blank');
        
        
        let img = document.createElement('img')
        img.setAttribute('src', thumbnail)
        anchorTag.appendChild(img)
        
        let titleTag = document.createElement('h3')
        titleTag.innerText = title;
        anchorTag.appendChild(titleTag)
        
        let creatorTag = document.createElement('h4')
        creatorTag.innerText = `by ${creator}`
        anchorTag.appendChild(creatorTag)
        
        let durationTag = document.createElement('span')
        durationTag.innerText = `Time: ${duration}`
        anchorTag.appendChild(durationTag)
        
        
        newVid.appendChild(anchorTag);
        parent.appendChild(newVid);
    }
    
}
