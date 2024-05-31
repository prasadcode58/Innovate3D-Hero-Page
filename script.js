function locomotive() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true ,
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
  
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
  
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  }
  locomotive();
  
  
  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });
  
  function files(index) {
    var data = `
       ./Model frames/0001.png
       ./Model frames/0002.png
       ./Model frames/0003.png
       ./Model frames/0004.png
       ./Model frames/0005.png
       ./Model frames/0006.png
       ./Model frames/0007.png
       ./Model frames/0008.png
       ./Model frames/0009.png
       ./Model frames/0010.png
       ./Model frames/0011.png
       ./Model frames/0012.png
       ./Model frames/0013.png
       ./Model frames/0014.png
       ./Model frames/0015.png
       ./Model frames/0016.png
       ./Model frames/0017.png
       ./Model frames/0018.png
       ./Model frames/0019.png
       ./Model frames/0020.png
       ./Model frames/0021.png
       ./Model frames/0022.png
       ./Model frames/0023.png
       ./Model frames/0024.png
       ./Model frames/0025.png
       ./Model frames/0026.png
       ./Model frames/0027.png
       ./Model frames/0028.png
       ./Model frames/0029.png
       ./Model frames/0030.png
       ./Model frames/0031.png
       ./Model frames/0032.png
       ./Model frames/0033.png
       ./Model frames/0034.png
       ./Model frames/0035.png
       ./Model frames/0036.png
       ./Model frames/0037.png
       ./Model frames/0038.png
       ./Model frames/0039.png
       ./Model frames/0040.png
       ./Model frames/0041.png
       ./Model frames/0042.png
       ./Model frames/0043.png
       ./Model frames/0044.png
       ./Model frames/0045.png
       ./Model frames/0046.png
       ./Model frames/0047.png
       ./Model frames/0048.png
       ./Model frames/0049.png
       ./Model frames/0050.png
       ./Model frames/0051.png
       ./Model frames/0052.png
       ./Model frames/0053.png
       ./Model frames/0054.png
       ./Model frames/0055.png
       ./Model frames/0056.png
       ./Model frames/0057.png
       ./Model frames/0058.png
       ./Model frames/0059.png
       ./Model frames/0060.png
       ./Model frames/0061.png
       ./Model frames/0062.png
       ./Model frames/0063.png
       ./Model frames/0064.png
       ./Model frames/0065.png
       ./Model frames/0066.png
       ./Model frames/0067.png
       ./Model frames/0068.png
       ./Model frames/0069.png
       ./Model frames/0070.png
       ./Model frames/0071.png
       ./Model frames/0072.png
       ./Model frames/0073.png
       ./Model frames/0074.png
       ./Model frames/0075.png
       ./Model frames/0076.png
       ./Model frames/0077.png
       ./Model frames/0078.png
       ./Model frames/0079.png
       ./Model frames/0080.png
       ./Model frames/0081.png
       ./Model frames/0082.png
       ./Model frames/0083.png
       ./Model frames/0084.png
       ./Model frames/0085.png
       ./Model frames/0086.png
       ./Model frames/0087.png
       ./Model frames/0088.png
       ./Model frames/0089.png
       ./Model frames/0090.png
       ./Model frames/0091.png
       ./Model frames/0092.png
       ./Model frames/0093.png
       ./Model frames/0094.png
       ./Model frames/0095.png
       ./Model frames/0096.png
       ./Model frames/0097.png
       ./Model frames/0098.png
       ./Model frames/0099.png
       ./Model frames/0100.png
       ./Model frames/0101.png
       ./Model frames/0102.png
       ./Model frames/0103.png
       ./Model frames/0104.png
       ./Model frames/0105.png
       ./Model frames/0106.png
       ./Model frames/0107.png
       ./Model frames/0108.png
       ./Model frames/0109.png
       ./Model frames/0110.png
       ./Model frames/0111.png
       ./Model frames/0112.png
       ./Model frames/0113.png
       ./Model frames/0114.png
       ./Model frames/0115.png
       ./Model frames/0116.png
       ./Model frames/0117.png
       ./Model frames/0118.png
       ./Model frames/0119.png
       ./Model frames/0120.png
       ./Model frames/0121.png
       ./Model frames/0122.png
       ./Model frames/0123.png
       ./Model frames/0124.png
       ./Model frames/0125.png
       ./Model frames/0126.png
       ./Model frames/0127.png
       ./Model frames/0128.png
       ./Model frames/0129.png
       ./Model frames/0130.png
       ./Model frames/0131.png
       ./Model frames/0132.png
       ./Model frames/0133.png
       ./Model frames/0134.png
       ./Model frames/0135.png
       ./Model frames/0136.png
       ./Model frames/0137.png
       ./Model frames/0138.png
       ./Model frames/0139.png
       ./Model frames/0140.png
       ./Model frames/0141.png
       ./Model frames/0142.png
       ./Model frames/0143.png
       ./Model frames/0144.png
       ./Model frames/0145.png
       ./Model frames/0146.png
       ./Model frames/0147.png
       ./Model frames/0148.png
       ./Model frames/0149.png
       ./Model frames/0150.png
       ./Model frames/0151.png
       ./Model frames/0152.png
       ./Model frames/0153.png
       ./Model frames/0154.png
       ./Model frames/0155.png
       ./Model frames/0156.png
       ./Model frames/0157.png
       ./Model frames/0158.png
       ./Model frames/0159.png
       ./Model frames/0160.png
       ./Model frames/0161.png
       ./Model frames/0162.png
       ./Model frames/0163.png
       ./Model frames/0164.png
       ./Model frames/0165.png
       ./Model frames/0166.png
       ./Model frames/0167.png
       ./Model frames/0168.png
       ./Model frames/0169.png
       ./Model frames/0170.png
       ./Model frames/0171.png
       ./Model frames/0172.png
       ./Model frames/0173.png
       ./Model frames/0174.png
       ./Model frames/0175.png
       ./Model frames/0176.png
       ./Model frames/0177.png
       ./Model frames/0178.png
       ./Model frames/0179.png
       ./Model frames/0180.png
       ./Model frames/0181.png
       ./Model frames/0182.png
       ./Model frames/0183.png
       ./Model frames/0184.png
       ./Model frames/0185.png
       ./Model frames/0186.png
       ./Model frames/0187.png
       ./Model frames/0188.png
       ./Model frames/0189.png
       ./Model frames/0190.png
       ./Model frames/0191.png
       ./Model frames/0192.png
       ./Model frames/0193.png
       ./Model frames/0194.png
       ./Model frames/0195.png
       ./Model frames/0196.png
       ./Model frames/0197.png
       ./Model frames/0198.png
       ./Model frames/0199.png
       ./Model frames/0200.png
       ./Model frames/0201.png
       ./Model frames/0202.png
       ./Model frames/0203.png
       ./Model frames/0204.png
       ./Model frames/0205.png
       ./Model frames/0206.png
       ./Model frames/0207.png
       ./Model frames/0208.png
       ./Model frames/0209.png
       ./Model frames/0210.png
       ./Model frames/0211.png
       ./Model frames/0212.png
       ./Model frames/0213.png
       ./Model frames/0214.png
       ./Model frames/0215.png
       ./Model frames/0216.png
       ./Model frames/0217.png
       ./Model frames/0218.png
       ./Model frames/0219.png
       ./Model frames/0220.png
       ./Model frames/0221.png
       ./Model frames/0222.png
       ./Model frames/0223.png
       ./Model frames/0224.png
       ./Model frames/0225.png
       ./Model frames/0226.png
       ./Model frames/0227.png
       ./Model frames/0228.png
       ./Model frames/0229.png
       ./Model frames/0230.png
       ./Model frames/0231.png
       ./Model frames/0232.png
       ./Model frames/0233.png
       ./Model frames/0234.png
       ./Model frames/0235.png
       ./Model frames/0236.png
       ./Model frames/0237.png
       ./Model frames/0238.png
       ./Model frames/0239.png
       ./Model frames/0240.png
       ./Model frames/0241.png
       ./Model frames/0242.png
       ./Model frames/0243.png
       ./Model frames/0244.png
       ./Model frames/0245.png
       ./Model frames/0246.png
       ./Model frames/0247.png
       ./Model frames/0248.png
       ./Model frames/0249.png
       ./Model frames/0250.png
       ./Model frames/0251.png
       ./Model frames/0252.png
       ./Model frames/0253.png
       ./Model frames/0254.png
       ./Model frames/0255.png
       ./Model frames/0256.png
       ./Model frames/0257.png
       ./Model frames/0258.png
       ./Model frames/0259.png
       ./Model frames/0260.png
       ./Model frames/0261.png
       ./Model frames/0262.png
       ./Model frames/0263.png
       ./Model frames/0264.png
       ./Model frames/0265.png
       ./Model frames/0266.png
       ./Model frames/0267.png
       ./Model frames/0268.png
       ./Model frames/0269.png
       ./Model frames/0270.png
       ./Model frames/0271.png
       ./Model frames/0272.png
       ./Model frames/0273.png
       ./Model frames/0274.png
       ./Model frames/0275.png
       ./Model frames/0276.png
       ./Model frames/0277.png
       ./Model frames/0278.png
       ./Model frames/0279.png
       ./Model frames/0280.png
       ./Model frames/0281.png
       ./Model frames/0282.png
       ./Model frames/0283.png
       ./Model frames/0284.png
       ./Model frames/0285.png
       ./Model frames/0286.png
       ./Model frames/0287.png
       ./Model frames/0288.png
       ./Model frames/0289.png
       ./Model frames/0290.png
       ./Model frames/0291.png
       ./Model frames/0292.png
       ./Model frames/0293.png
       ./Model frames/0294.png
       ./Model frames/0295.png
       ./Model frames/0296.png
       ./Model frames/0297.png
       ./Model frames/0298.png
       ./Model frames/0299.png
       ./Model frames/0300.png
   `;
    return data.split("\n")[index];
  }
  
  const frameCount = 300;
  
  const images = [];
  const imageSeq = {
    frame: 1,
  };
  
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }
  
  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#page>canvas`,
      start: `top top`,
      end: `580% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });
  
  images[1].onload = render;
  
  function render() {
    scaleImage(images[imageSeq.frame], context);
  }
  
  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: "#page>canvas",
    pin: true,
    // markers:true,
    scroller: `#main`,
    start: `top top`,
    end: `700% top`,
  });
  
  
  
  gsap.to("#page1",{
    scrollTrigger:{
      trigger:`#page1`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
  gsap.to("#page2",{
    scrollTrigger:{
      trigger:`#page2`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
  gsap.to("#page3",{
    scrollTrigger:{
      trigger:`#page3`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
  gsap.to("#page4",{
    scrollTrigger:{
      trigger:`#page4`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })