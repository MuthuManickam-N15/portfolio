# 🚀 Quick Setup Guide

## Step-by-Step Setup (5 Minutes)

### 1️⃣ Create Folder Structure

Create these folders and files:

```
portfolio-website/
│
├── index.html          ← Main page (copy from artifact)
│
├── css/
│   └── style.css       ← Styles (copy from artifact)
│
├── js/
│   └── script.js       ← JavaScript (copy from artifact)
│
├── images/             ← ADD YOUR IMAGES HERE
│   ├── profile.jpg     ← Your photo (400x400px)
│   ├── project1.png    ← Restaurant site screenshot
│   ├── project2.png    ← Freelancer site screenshot
│   └── project3.png    ← (Optional) Future project
│
└── README.md           ← Documentation (copy from artifact)
```

---

## 2️⃣ Copy Files

### Copy Each File:

1. **index.html** → Create file, paste HTML code
2. **css/style.css** → Create css folder, create file, paste CSS
3. **js/script.js** → Create js folder, create file, paste JavaScript
4. **README.md** → Create file, paste documentation

---

## 3️⃣ Add Images

### Image Requirements:

| File | Size | Format | Purpose |
|------|------|--------|---------|
| `profile.jpg` | 400x400px | JPG/PNG | Your photo |
| `project1.png` | 600x400px | PNG | Restaurant project |
| `project2.png` | 600x400px | PNG | Freelancer project |
| `project3.png` | 600x400px | PNG | Future project (optional) |

**Note**: If you don't add images, SVG placeholders will show automatically!

---

## 4️⃣ Customize Content

### Must Update:

1. **Your Name** (multiple locations)
   - Line 13: `<title>`
   - Line 23: Logo
   - Line 38-42: Hero section
   - Footer

2. **Email Address**
   - Line 263: Contact section
   - Line 309: Footer (if added)

3. **Location**
   - Line 269: Contact info card

4. **Social Links**
   - Lines 309-324: LinkedIn, GitHub, Twitter, Instagram

5. **Project Information**
   - Lines 120-220: Update titles, descriptions, and links
   - Change project images
   - Update technology tags

6. **About Text**
   - Lines 69-71: Write your introduction
   - Customize to your experience

---

## 5️⃣ Test Locally

### Option A: Double-click
- Simply open `index.html` in a browser

### Option B: Live Server (Recommended)
If using VS Code:
```
1. Install "Live Server" extension
2. Right-click index.html
3. Select "Open with Live Server"
```

---

## 🎨 Color Customization (Optional)

Want different colors? Edit `css/style.css` lines 6-12:

```css
:root {
    --primary: #88ABF2;        /* Main color */
    --primary-dark: #6B8FD9;   /* Darker shade */
    --secondary: #88B6F2;      /* Accent */
    --gray-light: #BFBFBF;     
    --gray-dark: #595959;      
    --black: #0D0D0D;          
}
```

**Try these palettes:**

### Vibrant (Restaurant Style)
```css
--primary: #ED3F27;
--secondary: #FEB21A;
--black: #134686;
```

### Mint Fresh
```css
--primary: #00D9B8;
--secondary: #7FE5D3;
--black: #1A1A1A;
```

### Purple Elegant
```css
--primary: #9D4EDD;
--secondary: #C77DFF;
--black: #10002B;
```

---

## 📱 Mobile Testing

Test on these devices:
- ✅ Desktop (1920x1080)
- ✅ Laptop (1366x768)
- ✅ Tablet (768x1024)
- ✅ Mobile (375x667)

Use browser DevTools (F12) → Device Toolbar

---

## 🚀 Deploy (Choose One)

### GitHub Pages (Free)
```bash
1. Create GitHub account
2. Create new repository: "portfolio"
3. Upload files
4. Settings → Pages → Select main branch
5. Visit: yourusername.github.io/portfolio
```

### Netlify (Easiest)
```
1. Visit netlify.com
2. Drag & drop your folder
3. Done! Get instant URL
4. Add custom domain (optional)
```

### Vercel
```
1. Visit vercel.com
2. Import GitHub repository
3. Deploy automatically
4. Get vercel.app URL
```

---

## ✅ Final Checklist

Before going live:

- [ ] All personal info updated
- [ ] Images added and optimized
- [ ] Links work (projects, social)
- [ ] Email address correct
- [ ] Tested on mobile
- [ ] Tested on desktop
- [ ] No console errors (F12)
- [ ] Spelling checked
- [ ] Social links added
- [ ] Copyright year correct

---

## 🆘 Common Issues & Fixes

### Issue: Images not showing
**Fix**: 
- Check file names match exactly (case-sensitive!)
- Ensure images are in `images/` folder
- Verify file extensions (.jpg, .png, not .jpeg)

### Issue: CSS not loading
**Fix**:
- Check folder structure: `css/style.css`
- Open DevTools (F12) → Console for errors
- Clear browser cache (Ctrl+Shift+R)

### Issue: JavaScript not working
**Fix**:
- Check folder structure: `js/script.js`
- Open Console (F12) for error messages
- Ensure file path is correct in HTML

### Issue: Mobile menu not working
**Fix**:
- Clear cache
- Check `script.js` is loaded
- Test in different browser

---

## 🎯 Next Steps

After setup:

1. **Test Everything**: Click all buttons, fill form
2. **Get Feedback**: Ask friends to review
3. **Deploy**: Choose hosting option
4. **Share**: Add URL to resume, LinkedIn
5. **Update Regularly**: Add new projects
6. **SEO**: Submit to Google Search Console
7. **Analytics**: Add Google Analytics (optional)

---

## 💡 Pro Tips

1. **Optimize Images**: Use [TinyPNG](https://tinypng.com) to compress
2. **Custom Domain**: Buy domain from Namecheap (~$10/year)
3. **SSL Certificate**: Free with Netlify/GitHub Pages
4. **Performance**: Test with [PageSpeed Insights](https://pagespeed.web.dev)
5. **Backup**: Keep files in GitHub always

---

## 📞 Need Help?

- **HTML/CSS Issues**: [MDN Web Docs](https://developer.mozilla.org)
- **JavaScript Errors**: Check browser Console (F12)
- **Deployment**: Check hosting platform docs
- **Design Ideas**: Browse [Dribbble](https://dribbble.com), [Awwwards](https://awwwards.com)

---

## 🎉 You're Ready!

Your portfolio is complete and ready to impress clients and employers!

**Good luck with your web development journey! 🚀**

---

*Setup time: ~5 minutes | Customization: ~15 minutes | Total: 20 minutes to live portfolio!*

