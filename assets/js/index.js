
/* Custom animations created using Animation library    
 * Author: Sungjoon Steve Won / suwon@microsoft.com
 * Date: October 11, 2016
 * OXO Canvas Design Team
 */

var rightPaneImg = document.getElementById("rightPaneImg");
var tbInFocus = null;
function setupEvents() {
    var mTB1 = document.getElementById("tb1");
    mTB1.addEventListener('click', function(e) {
        
        rightPaneImg.setAttribute("src", "assets/Slide1.jpg");
        mTB1.className = "thumbnail_selected";
        
        if (tbInFocus != null)
            tbInFocus.className = "thumbnail_unselected";
        tbInFocus = mTB1;
    }, false);
    
    var mTB2 = document.getElementById("tb2");
    mTB2.addEventListener('click', function(e) {
        
        rightPaneImg.setAttribute("src", "assets/Slide2.jpg");
        mTB2.className = "thumbnail_selected";
        
        if (tbInFocus != null)
            tbInFocus.className = "thumbnail_unselected";
        tbInFocus = mTB2;
    }, false);
    
    var mTB3 = document.getElementById("tb3");
    mTB3.addEventListener('click', function(e) {
        
        rightPaneImg.setAttribute("src", "assets/Slide3n.jpg");
        mTB3.className = "thumbnail_selected";
        
        if (tbInFocus != null)
            tbInFocus.className = "thumbnail_unselected";
        tbInFocus = mTB3;
    }, false);
    
        var mTB4 = document.getElementById("tb4");
    mTB4.addEventListener('click', function(e) {
        
        rightPaneImg.setAttribute("src", "assets/Slide4n.jpg");
        mTB4.className = "thumbnail_selected";
        
        if (tbInFocus != null)
            tbInFocus.className = "thumbnail_unselected";
        tbInFocus = mTB4;
    }, false);
    
        var mTB5 = document.getElementById("tb5");
    mTB5.addEventListener('click', function(e) {
        
        rightPaneImg.setAttribute("src", "assets/Slide5.jpg");
        mTB5.className = "thumbnail_selected";
        
        if (tbInFocus != null)
            tbInFocus.className = "thumbnail_unselected";
        tbInFocus = mTB5;
    }, false);
    
        var mTB6 = document.getElementById("tb6");
    mTB6.addEventListener('click', function(e) {
        
        rightPaneImg.setAttribute("src", "assets/Slide6n.jpg");
        mTB6.className = "thumbnail_selected";
        
        if (tbInFocus != null)
            tbInFocus.className = "thumbnail_unselected";
        tbInFocus = mTB6;mTB6
    }, false);
    
        var mTB7 = document.getElementById("tb7");
    mTB7.addEventListener('click', function(e) {
        
        rightPaneImg.setAttribute("src", "assets/Slide7n.jpg");
        mTB7.className = "thumbnail_selected";
        
        if (tbInFocus != null)
            tbInFocus.className = "thumbnail_unselected";
        tbInFocus = mTB7;
    }, false);
    
        var mTB8 = document.getElementById("tb8");
    mTB8.addEventListener('click', function(e) {
        
        rightPaneImg.setAttribute("src", "assets/Slide8.jpg");
        mTB8.className = "thumbnail_selected";
        
        if (tbInFocus != null)
            tbInFocus.className = "thumbnail_unselected";
        tbInFocus = mTB8;
    }, false);
    
        var mTB9 = document.getElementById("tb9");
    mTB9.addEventListener('click', function(e) {
        
        rightPaneImg.setAttribute("src", "assets/Slide9.jpg");
        mTB9.className = "thumbnail_selected";
        
        if (tbInFocus != null)
            tbInFocus.className = "thumbnail_unselected";
        tbInFocus = mTB9;
    }, false);
    
    tbInFocus = mTB1;
}

setupEvents();