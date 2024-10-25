function getHikeDetail(hike) {
    const path = "./data/HikingPage/";

    return ` 
<pre>
    id: ${hike.id}, 
    name: ${hike.name}, 
    description: ${hike.description},
    length:  ${hike.length},
    difficulty:  ${hike.difficulty},
</pre>
<br>
scenicImage:  <br> <img src ="${path + hike.scenicImage}">
<br>
trailMapImage:  <br> <img src="${path + hike.trailMapImage}">  
 `;
}

document.addEventListener("DOMContentLoaded",() => {

    for (h of hikes) {
        hikeSelect.appendChild(new Option(h.name));
    }

    hikeSelect.addEventListener("change", () => {
        for (hike of hikes) {
            if (hikeSelect.value == hike.name) {
                hikeDiv.innerHTML = getHikeDetail(hike);
            }
        }
    });

});