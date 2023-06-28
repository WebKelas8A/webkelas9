function close(){
    gsap.fromTo(
        "body",
        { opacity: 1 },
        {
          opacity: 0,
          duration: 1.4,
          delay: 5,
        }
      );
}