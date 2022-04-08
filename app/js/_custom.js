document.addEventListener("DOMContentLoaded", function () {

    
    const header_menuBtn = document.getElementById('header_menuBtn');
    const headerWrapMob = document.getElementById('headerWrapMob');
    const header_closeBtn = document.getElementById('header_closeBtn');
    
    if(header_menuBtn){
        header_menuBtn.addEventListener('click', function () {
            header_menuBtn.style.display = 'none';
            header_closeBtn.style.display = 'block';
            if (screen.width < 767) {
                headerWrapMob.style.top = '70px';
            }
            else {
                headerWrapMob.style.top = '160px';
            }
    
        })
    }

    if(header_closeBtn){
        header_closeBtn.addEventListener('click', function () {
            header_menuBtn.style.display = 'block';
            header_closeBtn.style.display = 'none';
            headerWrapMob.style.top = '-100%';
        })
    }

    let config = {
        type: "text",
        limit: 250,
        more: "читать больше",
        less: "скрыть текст"
    }

    // if (screen.width < 991) {
    //     config.limit = 100000
    // }
    
    new ShowMore('.hide-element', {
        config: config
    });

    // const tagInfo = document.getElementsByClassName("tagInfo");
    // const tagInfo_showMore = document.getElementsByClassName("tagInfo_showMore");

    // if (tagInfo) {
        // for (let i = 0; i < tagInfo.length; i++) {
        //     tagInfo[i].getElementsByID("tagInfo_showMore")
        // }
    // }
    document.querySelectorAll('.tagInfo').forEach((item) => 
        item.addEventListener('click', function () {
            const link = item.getElementsByClassName('company_linksBtn');
            for (let i = 0; i < link.length; i++) {
                link[i].style.display = 'block';
            }
            const key_thems = item.getElementsByClassName('key_thems');
            for (let i = 0; i < key_thems.length; i++) {
                key_thems[i].style.display = 'block';
            }
            const socialLinks = item.getElementsByClassName('socialLinks');
            for (let i = 0; i < socialLinks.length; i++) {
                socialLinks[i].style.display = 'block';
            }
            const hide_element = item.getElementsByClassName('hide-element');
            for (let i = 0; i < hide_element.length; i++) {
                hide_element[i].style.display = 'block';
            }
            const tagInfo_showMore = item.getElementsByClassName('tagInfo_showMore');
            for (let i = 0; i < tagInfo_showMore.length; i++) {
                tagInfo_showMore[i].style.display = 'none';
            }
        })
    )
});
