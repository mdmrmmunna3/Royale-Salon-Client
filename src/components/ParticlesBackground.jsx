
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <div>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}

                options={
                    {
                        fullScreen: {
                            enable: true,
                            zIndex: -100
                        },
                        fpsLimit: 120,
                        particles: {
                            number: {
                                value: 0,
                                density: {
                                    enable: true,
                                    value_area: 800
                                }
                            },
                            color: {
                                value: "#ff0000",
                                animation: {
                                    enable: true,
                                    speed: 180,
                                    sync: true
                                }
                            },
                            shape: {
                                type: "circle",
                                stroke: {
                                    width: 0,
                                    color: "#000000"
                                },
                                polygon: {
                                    nb_sides: 5
                                },
                                image: {
                                    src: "https://cdn.matteobruni.it/images/particles/github.svg",
                                    width: 100,
                                    height: 100
                                }
                            },
                            opacity: {
                                value: 0.5,
                                random: false,
                                anim: {
                                    enable: false,
                                    speed: 3,
                                    opacity_min: 0.1,
                                    sync: false
                                }
                            },
                            size: {
                                value: 15,
                                random: {
                                    enable: true,
                                    minimumValue: 5
                                },
                                animation: {
                                    enable: true,
                                    speed: 5,
                                    minimumValue: 5,
                                    sync: true,
                                    startValue: "min",
                                    destroy: "max"
                                }
                            },
                            links: {
                                enable: false
                            },
                            move: {
                                enable: true,
                                speed: 3.5,
                                direction: "none",
                                random: false,
                                straight: false,
                                outMode: "destroy",
                                attract: {
                                    enable: false,
                                    rotateX: 600,
                                    rotateY: 1200
                                }
                            }
                        },

                        interactivity: {
                            detectsOn: "window",
                            events: {
                                onhover: {
                                    enable: true,
                                    mode: "trail"
                                },
                                onclick: {
                                    enable: true,
                                    mode: "push"
                                },
                                resize: true
                            },

                            "modes": {
                                "attract": {
                                    "distance": 200,
                                    "duration": 0.4,
                                    "easing": "ease-out-quad",
                                    "factor": 1,
                                    "maxSpeed": 50,
                                    "speed": 1
                                },

                                "bounce": {
                                    "distance": 200
                                },
                                "bubble": {
                                    "distance": 200,
                                    "duration": 0.4,
                                    "mix": false,
                                    "divs": {
                                        "distance": 200,
                                        "duration": 0.4,
                                        "mix": false,
                                        "selectors": []
                                    }
                                },

                                "connect": {
                                    "distance": 80,
                                    "links": {
                                        "opacity": 0.5
                                    },
                                    "radius": 60
                                },
                                "grab": {
                                    "distance": 100,
                                    "links": {
                                        "blink": false,
                                        "consent": false,
                                        "opacity": 1
                                    }
                                },

                                "push": {
                                    "default": true,
                                    "groups": [],
                                    "quantity": 4
                                },
                                "remove": {
                                    "quantity": 2
                                },
                                "repulse": {
                                    "distance": 200,
                                    "duration": 0.4,
                                    "factor": 100,
                                    "speed": 1,
                                    "maxSpeed": 50,
                                    "easing": "ease-out-quad",
                                    "divs": {
                                        "distance": 200,
                                        "duration": 0.4,
                                        "factor": 100,
                                        "speed": 1,
                                        "maxSpeed": 50,
                                        "easing": "ease-out-quad",
                                        "selectors": []
                                    }
                                },
                                "slow": {
                                    "factor": 3,
                                    "radius": 200
                                },

                                "trail": {
                                    "delay": 0.005,
                                    "pauseOnStop": true,
                                    "quantity": 5,
                                    "particles": {
                                        "color": {
                                            "value": "#ff0000",
                                            "animation": {
                                                "enable": true,
                                                "speed": 400,
                                                "sync": true
                                            }
                                        },

                                        "collisions": {
                                            "enable": false
                                        },
                                        "links": {
                                            "enable": false
                                        },
                                        "move": {
                                            "outModes": {
                                                "default": "destroy"
                                            },
                                            "speed": 2
                                        },
                                        "size": {
                                            "value": 5,
                                            "animation": {
                                                "enable": true,
                                                "speed": 5,
                                                "minimumValue": 1,
                                                "sync": true,
                                                "startValue": "min",
                                                "destroy": "max"
                                            }
                                        }
                                    }
                                },

                                "light": {
                                    "area": {
                                        "gradient": {
                                            "start": {
                                                "value": "3b5e98"
                                            },
                                            "stop": {
                                                "value": "#17163e"
                                            }
                                        },
                                        "radius": 1000
                                    },
                                    "shadow": {
                                        "color": {
                                            "value": "#17163e"
                                        },
                                        "length": 2000
                                    }
                                }
                            }

                        },
                        retina_detect: true
                    }
                }
            ></Particles>
        </div>
    );
};

export default ParticlesBackground;