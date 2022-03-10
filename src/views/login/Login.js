import React from 'react'
import { Form, Button, Input, message } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './Login.css'
import Particles from 'react-tsparticles';
import axios from 'axios'
export default function Login(props) {

    const onFinish = (values) => {
        // console.log(values)
        axios.post('http://47.95.1.254/api/login', {
          name: values.username,
          password: values.password
        }).then((res) => {
            // console.log('res', res)
            // console.log('code', res.data.code)
            // console.log('token', res.data.data.token)
            // console.log('JSON.stringify(res.data.data.token)', JSON.stringify(res.data.data.token))
            if(res.data.code === 200) {
              localStorage.setItem('token', JSON.stringify(res.data.data.token))
              props.history.replace('/')
              console.log('props', props)
            } else {
              message.error("用户名或密码不匹配")
            }
        })
        
        
    }
    return (
        <div style={{ background: 'rgb(35, 39, 65)', height: "100%",overflow:'hidden' }}>
            <Particles height={document.documentElement.clientHeight}params={
                {
                    "autoPlay": true,
                    "background": {
                      "color": {
                        "value": "#043564"
                      },
                      "image": "url(./kbLd9vb_new.gif)",
                      "position": "0 50%",
                      "repeat": "no-repeat",
                      "size": "60%",
                      "opacity": 1
                    },
                    "backgroundMask": {
                      "composite": "destination-out",
                      "cover": {
                        "color": {
                          "value": "#fff"
                        },
                        "opacity": 1
                      },
                      "enable": false
                    },
                    "fullScreen": {
                      "enable": true,
                      "zIndex": 1
                    },
                    "detectRetina": true,
                    "duration": 0,
                    "fpsLimit": 120,
                    "interactivity": {
                      "detectsOn": "window",
                      "events": {
                        "onClick": {
                          "enable": true,
                          "mode": "repulse"
                        },
                        "onDiv": {
                          "selectors": [],
                          "enable": false,
                          "mode": [],
                          "type": "circle"
                        },
                        "onHover": {
                          "enable": false,
                          "mode": "grab",
                          "parallax": {
                            "enable": false,
                            "force": 2,
                            "smooth": 10
                          }
                        },
                        "resize": true
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
                          "distance": 400,
                          "duration": 2,
                          "mix": false,
                          "opacity": 8,
                          "size": 40
                        },
                        "connect": {
                          "distance": 80,
                          "links": {
                            "opacity": 0.5
                          },
                          "radius": 60
                        },
                        "grab": {
                          "distance": 200,
                          "links": {
                            "blink": false,
                            "consent": false,
                            "opacity": 1
                          }
                        },
                        "light": {
                          "area": {
                            "gradient": {
                              "start": {
                                "value": "#ffffff"
                              },
                              "stop": {
                                "value": "#000000"
                              }
                            },
                            "radius": 1000
                          },
                          "shadow": {
                            "color": {
                              "value": "#000000"
                            },
                            "length": 2000
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
                          "easing": "ease-out-quad"
                        },
                        "slow": {
                          "factor": 3,
                          "radius": 200
                        },
                        "trail": {
                          "delay": 1,
                          "pauseOnStop": false,
                          "quantity": 1
                        }
                      }
                    },
                    "manualParticles": [],
                    "motion": {
                      "disable": false,
                      "reduce": {
                        "factor": 4,
                        "value": true
                      }
                    },
                    "particles": {
                      "bounce": {
                        "horizontal": {
                          "random": {
                            "enable": false,
                            "minimumValue": 0.1
                          },
                          "value": 1
                        },
                        "vertical": {
                          "random": {
                            "enable": false,
                            "minimumValue": 0.1
                          },
                          "value": 1
                        }
                      },
                      "collisions": {
                        "bounce": {
                          "horizontal": {
                            "random": {
                              "enable": false,
                              "minimumValue": 0.1
                            },
                            "value": 1
                          },
                          "vertical": {
                            "random": {
                              "enable": false,
                              "minimumValue": 0.1
                            },
                            "value": 1
                          }
                        },
                        "enable": false,
                        "mode": "bounce",
                        "overlap": {
                          "enable": true,
                          "retries": 0
                        }
                      },
                      "color": {
                        "value": "#ffffff",
                        "animation": {
                          "h": {
                            "count": 0,
                            "enable": false,
                            "offset": 0,
                            "speed": 1,
                            "sync": true
                          },
                          "s": {
                            "count": 0,
                            "enable": false,
                            "offset": 0,
                            "speed": 1,
                            "sync": true
                          },
                          "l": {
                            "count": 0,
                            "enable": false,
                            "offset": 0,
                            "speed": 1,
                            "sync": true
                          }
                        }
                      },
                      "destroy": {
                        "mode": "none",
                        "split": {
                          "count": 1,
                          "factor": {
                            "random": {
                              "enable": false,
                              "minimumValue": 0
                            },
                            "value": 3
                          },
                          "rate": {
                            "random": {
                              "enable": false,
                              "minimumValue": 0
                            },
                            "value": {
                              "min": 4,
                              "max": 9
                            }
                          },
                          "sizeOffset": true
                        }
                      },
                      "gradient": [],
                      "groups": {},
                      "life": {
                        "count": 0,
                        "delay": {
                          "random": {
                            "enable": false,
                            "minimumValue": 0
                          },
                          "value": 0,
                          "sync": false
                        },
                        "duration": {
                          "random": {
                            "enable": false,
                            "minimumValue": 0.0001
                          },
                          "value": 0,
                          "sync": false
                        }
                      },
                      "links": {
                        "blink": false,
                        "color": {
                          "value": "#ffffff"
                        },
                        "consent": false,
                        "distance": 150,
                        "enable": false,
                        "frequency": 1,
                        "opacity": 0.4,
                        "shadow": {
                          "blur": 5,
                          "color": {
                            "value": "#00ff00"
                          },
                          "enable": false
                        },
                        "triangles": {
                          "enable": false,
                          "frequency": 1
                        },
                        "width": 1,
                        "warp": false
                      },
                      "move": {
                        "angle": {
                          "offset": 0,
                          "value": 90
                        },
                        "attract": {
                          "distance": 200,
                          "enable": false,
                          "rotate": {
                            "x": 600,
                            "y": 1200
                          }
                        },
                        "decay": 0,
                        "distance": {},
                        "direction": "left",
                        "drift": 0,
                        "enable": true,
                        "gravity": {
                          "acceleration": 9.81,
                          "enable": false,
                          "inverse": false,
                          "maxSpeed": 50
                        },
                        "path": {
                          "clamp": true,
                          "delay": {
                            "random": {
                              "enable": false,
                              "minimumValue": 0
                            },
                            "value": 0
                          },
                          "enable": false,
                          "options": {}
                        },
                        "outModes": {
                          "default": "out",
                          "bottom": "out",
                          "left": "out",
                          "right": "out",
                          "top": "out"
                        },
                        "random": false,
                        "size": false,
                        "speed": 6,
                        "spin": {
                          "acceleration": 0,
                          "enable": false
                        },
                        "straight": true,
                        "trail": {
                          "enable": false,
                          "length": 10,
                          "fillColor": {
                            "value": "#000000"
                          }
                        },
                        "vibrate": false,
                        "warp": false
                      },
                      "number": {
                        "density": {
                          "enable": false,
                          "area": 800,
                          "factor": 1000
                        },
                        "limit": 0,
                        "value": 100
                      },
                      "opacity": {
                        "random": {
                          "enable": false,
                          "minimumValue": 0.1
                        },
                        "value": 0.5,
                        "animation": {
                          "count": 0,
                          "enable": false,
                          "speed": 1,
                          "sync": false,
                          "destroy": "none",
                          "startValue": "random",
                          "minimumValue": 0.1
                        }
                      },
                      "orbit": {
                        "animation": {
                          "count": 0,
                          "enable": false,
                          "speed": 1,
                          "sync": false
                        },
                        "enable": false,
                        "opacity": 1,
                        "rotation": {
                          "random": {
                            "enable": false,
                            "minimumValue": 0
                          },
                          "value": 45
                        },
                        "width": 1
                      },
                      "reduceDuplicates": false,
                      "repulse": {
                        "random": {
                          "enable": false,
                          "minimumValue": 0
                        },
                        "value": 0,
                        "enabled": false,
                        "distance": 1,
                        "duration": 1,
                        "factor": 1,
                        "speed": 1
                      },
                      "roll": {
                        "darken": {
                          "enable": false,
                          "value": 0
                        },
                        "enable": false,
                        "enlighten": {
                          "enable": false,
                          "value": 0
                        },
                        "mode": "vertical",
                        "speed": 25
                      },
                      "rotate": {
                        "random": {
                          "enable": false,
                          "minimumValue": 0
                        },
                        "value": 0,
                        "animation": {
                          "enable": false,
                          "speed": 0,
                          "sync": false
                        },
                        "direction": "clockwise",
                        "path": false
                      },
                      "shadow": {
                        "blur": 0,
                        "color": {
                          "value": "#000000"
                        },
                        "enable": false,
                        "offset": {
                          "x": 0,
                          "y": 0
                        }
                      },
                      "shape": {
                        "options": {
                          "star": {
                            "sides": 5
                          }
                        },
                        "type": "star"
                      },
                      "size": {
                        "random": {
                          "enable": true,
                          "minimumValue": 1
                        },
                        "value": {
                          "min": 1,
                          "max": 4
                        },
                        "animation": {
                          "count": 0,
                          "enable": false,
                          "speed": 40,
                          "sync": false,
                          "destroy": "none",
                          "startValue": "random",
                          "minimumValue": 0.1
                        }
                      },
                      "stroke": {
                        "width": 0
                      },
                      "tilt": {
                        "random": {
                          "enable": false,
                          "minimumValue": 0
                        },
                        "value": 0,
                        "animation": {
                          "enable": false,
                          "speed": 0,
                          "sync": false
                        },
                        "direction": "clockwise",
                        "enable": false
                      },
                      "twinkle": {
                        "lines": {
                          "enable": false,
                          "frequency": 0.05,
                          "opacity": 1
                        },
                        "particles": {
                          "enable": false,
                          "frequency": 0.05,
                          "opacity": 1
                        }
                      },
                      "wobble": {
                        "distance": 5,
                        "enable": false,
                        "speed": 50
                      },
                      "zIndex": {
                        "random": {
                          "enable": false,
                          "minimumValue": 0
                        },
                        "value": 0,
                        "opacityRate": 1,
                        "sizeRate": 1,
                        "velocityRate": 1
                      }
                    },
                    "pauseOnBlur": true,
                    "pauseOnOutsideViewport": true,
                    "responsive": [],
                    "style": {},
                    "themes": [],
                    "zLayers": 100
                  }
            }/>


            <div className="formContainer">
                <div className="logintitle">发布管理系统</div>
                <Form
                    name="normal_login"
                    className="login-form"
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your Username!' }]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your Password!' }]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}
