import { 
    MenuArr,
    FinditemArr,
    CategoryListArr,
    TodayDealItems,
    SpecialExhibition,
    BestItems, 
} from "../dummy/dummyData.js";

const publicCategoryHtml = (list) => {
    return `
        <li class="category_list">
            <a href="#" class="category_link">
                <div class="category_img_wrap">
                    <img src=${list.icon} alt=${list.alt}>
                </div>
                <p>${list.title}</p>
            </a>
        </li>
    `   
};

const publicItemHtml = (item) => {
    return `
        <li class="tab_item">
            <a href="#" class="today_deal_link">
                <div class="item_img scale_hidden">
                    <img class="img_scale_transition" src=${item.img} alt=${item.alt}>
                </div>
                <article class="item_info">
                    <h3 class="item_title_wrap">
                        <p class="item_brand">${item.brand}</p>
                        <p class="item_title">${item.title}</p>
                    </h3>
                    <div class="item_price_wrap">
                        <sapn class="item_rate">${item.price_rate}%</span>
                        <sapn class="item_price">${item.price.toLocaleString()} 외</span>
                    </div>
                    <div class="item_states_wrap">
                        <p class="item_states">
                        <svg class="star_icon" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">< fill="currentColor" fill-rule="evenodd" d="M12 19.72l-5.677 2.405c-.76.322-1.318-.094-1.247-.906l.533-6.142-4.042-4.656c-.54-.624-.317-1.283.477-1.467l6.006-1.39L11.23 2.28c.426-.707 1.122-.699 1.542 0l3.179 5.282 6.006 1.391c.805.187 1.011.851.477 1.467l-4.042 4.656.533 6.142c.072.822-.497 1.224-1.247.906L12 19.72z">
                        <path fill="currentColor" fill-rule="evenodd" d="M12 19.72l-5.677 2.405c-.76.322-1.318-.094-1.247-.906l.533-6.142-4.042-4.656c-.54-.624-.317-1.283.477-1.467l6.006-1.39L11.23 2.28c.426-.707 1.122-.699 1.542 0l3.179 5.282 6.006 1.391c.805.187 1.011.851.477 1.467l-4.042 4.656.533 6.142c.072.822-.497 1.224-1.247.906L12 19.72z"></path>
                    </svg>
                            <span class="avg">${item.average_score}</span>
                            리뷰 ${item.review_count.toLocaleString()}
                        </p>
                    </div>
                </article>
            </a>    
        </li>
    `  
};

const headerNav = () => {
    const nav = document.querySelector(".header_nav");

    MenuArr.forEach(menu => {
        nav.innerHTML += `
            <span class="header_menu">
                <a href="#" class="header_menu_link">
                    <p class="header_menu_name">        
                        ${menu}
                    </p>
                </a>
                <span class="underline"></span>
            </span>
        `
    });

    const navMenus = document.querySelectorAll(".header_menu_link");
    const navUnderline = document.querySelector(".underline");
    let activeMenu = navMenus[0];

    // 초기값 설정
    activeMenu.classList.add('on');
    navUnderline.style.left = activeMenu.offsetLeft + 'px';
    navUnderline.style.width = activeMenu.offsetWidth + 'px';

    // 타겟에 underliner과 color변경
    const targetStyle = (target) => {
        activeMenu.classList.remove('on');
        navUnderline.style.left = target.offsetLeft + 'px';
        navUnderline.style.width = target.offsetWidth + 'px';

        activeMenu = target;
        activeMenu.classList.add('on');
    }

    navMenus.forEach(menu => {
        menu.addEventListener('click', (e) => {
            targetStyle(e.currentTarget);
        })
    })
};
headerNav();

const contetntsByCategory = () => {
    const categoryLists = document.querySelector(".contents_category_lists");
    CategoryListArr.forEach(list => {
        categoryLists.innerHTML += publicCategoryHtml(list);
    })
};
contetntsByCategory();

const finditemCategory = () => {
    const finditemLists = document.querySelector(".finditem_lists");
    FinditemArr.forEach(item => {
        finditemLists.innerHTML += publicCategoryHtml(item);
    });
};
finditemCategory();

const specialExhibition = () => {
    const specialLists = document.querySelector(".special_exhibition_lists");
    
    SpecialExhibition.forEach(list => {
        specialLists.innerHTML += `
            <li class="special_exhibition_list">
                <a href="#">
                    <div class="special_exhibition_img_wrap scale_hidden">
                        <img class="special_exhibition_img img_scale_transition" src=${list.img} alt=${list.alt}>
                    </div>
                    <div class="special_exhibition_info">
                        <p class="special_exhibition_summary">${list.summery}</p>
                        <p class="special_exhibition_title">${list.title}</p>
                    </div>
                </a>
            </li>
        `
    });
};
specialExhibition();

const todayDealItems = () => {
    const dealItems = document.querySelector(".today_deal_items_lists");

    TodayDealItems.forEach(item => {
        dealItems.innerHTML +=`
            <li class="today_deal_item">
                <a href="#" class="today_deal_link">
                    <div class="item_img scale_hidden">
                        <img class="img_scale_transition" src=${item.img} alt=${item.alt}>
                    </div>
                    <article class="item_info">
                        <h3 class="item_title_wrap">
                            <p class="item_brand">${item.brand}</p>
                            <p class="item_title">${item.title}</p>
                        </h3>
                        <div class="item_price_wrap">
                            <sapn class="item_rate">${item.price_rate}%</span>
                            <sapn class="item_price">${item.price.toLocaleString()} 외</span>
                        </div>
                        <div class="item_states_wrap">
                            <p class="item_states">
                                <svg class="star_icon" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">< fill="currentColor" fill-rule="evenodd" d="M12 19.72l-5.677 2.405c-.76.322-1.318-.094-1.247-.906l.533-6.142-4.042-4.656c-.54-.624-.317-1.283.477-1.467l6.006-1.39L11.23 2.28c.426-.707 1.122-.699 1.542 0l3.179 5.282 6.006 1.391c.805.187 1.011.851.477 1.467l-4.042 4.656.533 6.142c.072.822-.497 1.224-1.247.906L12 19.72z">
                                    <path fill="currentColor" fill-rule="evenodd" d="M12 19.72l-5.677 2.405c-.76.322-1.318-.094-1.247-.906l.533-6.142-4.042-4.656c-.54-.624-.317-1.283.477-1.467l6.006-1.39L11.23 2.28c.426-.707 1.122-.699 1.542 0l3.179 5.282 6.006 1.391c.805.187 1.011.851.477 1.467l-4.042 4.656.533 6.142c.072.822-.497 1.224-1.247.906L12 19.72z"></path>
                                </svg>
                                <span class="avg">${item.average_score}</span>
                                리뷰 ${item.review_count.toLocaleString()}
                            </p>
                        </div>
                    </article>
                </a>    
            </li>
        `
    })
};
todayDealItems();

const bestTabMenu = () => {
    const tabBtnLists = document.querySelector(".tab_btn_lists");
    const tabItemWrap = document.querySelector(".tab_item_wrap");

    // 탭 버튼 렌더링
    BestItems.forEach(items => {
        Object.keys(items).forEach(item => {
            tabBtnLists.innerHTML += `
                <li class="tab_btn_list">
                    ${item}
                </li>
            `
        }); 

        const tabBtns = document.querySelectorAll(".tab_btn_lists .tab_btn_list");
        let activeTab = tabBtns[0];

        // 초기 탭 활성화
        activeTab.classList.add("on");
        tabItemWrap.innerHTML = items.전체.map(item => publicItemHtml(item)).join('');

        // 탭버튼 클릭 이벤트
        tabBtns.forEach(tabBtn => {
            tabBtn.addEventListener('click', () => {
                activeTab.classList.remove("on");

                activeTab = tabBtn;
                activeTab.classList.add("on");

                const activeTabTxt = tabBtn.innerText;
                tabItemWrap.innerHTML = items[activeTabTxt].map(item => publicItemHtml(item)).join('');
            });
        });
    });
};
bestTabMenu();

const moreView = () => {
    const specialListElements = document.querySelectorAll(".special_exhibition_list");
    const moreViewElement = `
        <li class="more_view_list">
            <a href="#" class="more_view_link">
                <span class="more_view_btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="none" stroke="#2f3438" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 16h21m-7-8l8 8l-8 8"/></svg>
                </span>
                <p class="more_view_txt">더보기</p>
            </a>
        </li>
    `
    // 리스트 끝에 더보기 붙이기
    specialListElements[specialListElements.length -1].insertAdjacentHTML("afterend" ,moreViewElement); 
};
moreView();