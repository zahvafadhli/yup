<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zahva's Portfolio</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/your-kit-code.js" crossorigin="anonymous"></script>
</head>
<body>
    <header class="header">
        <nav class="navbar">
            <div class="logo">Zahva</div>
            <ul class="nav-menu">
                <li class="nav-item"><a href="#home" class="nav-link active">Home</a></li>
                <li class="nav-item"><a href="#about" class="nav-link">About</a></li>
                <li class="nav-item"><a href="#contact" class="nav-link">Contact</a></li>
            </ul>
            <div class="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </nav>
    </header>

    <section id="home" class="page active">
        <div class="hero">
            <div class="content">
                <div class="profile-container">
                    <img src="profile.jpg" alt="Zahva's Anime Profile" class="profile-img floating">
                </div>
                <h1 class="title animate__fadeIn">Zahva</h1>
                <p class="subtitle animate__fadeIn">15 Years Old | Student | Tech Enthusiast</p>
                <div class="social-icons">
                    <a href="#" class="icon"><i class="fab fa-instagram"></i></a>
                    <a href="#" class="icon"><i class="fab fa-github"></i></a>
                    <a href="#" class="icon"><i class="fab fa-discord"></i></a>
                </div>
            </div>
        </div>
    </section>

    <section id="about" class="page">
        <div class="about-container">
            <h2 class="section-title">About Me</h2>
            <div class="cards-container">
                <div class="card animate__slideInLeft">
                    <h3>Hobbies</h3>
                    <ul>
                        <li>Programming</li>
                        <li>Gaming</li>
                        <li>Reading Manga</li>
                        <li>Anime</li>
                    </ul>
                </div>
                <div class="card animate__slideInUp">
                    <h3>Skills</h3>
                    <div class="skills">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>JavaScript</span>
                        <span>UI Design</span>
                    </div>
                </div>
                <div class="card animate__slideInRight">
                    <h3>Education</h3>
                    <p>High School Student<br>
                    Computer Science Enthusiast<br>
                    Self-taught Developer</p>
                </div>
            </div>
        </div>
    </section>

    <section id="contact" class="page">
        <div class="contact-container">
            <h2 class="section-title">Get in Touch</h2>
            <form class="contact-form">
                <div class="form-group">
                    <input type="text" placeholder="Name" required>
                </div>
                <div class="form-group">
                    <input type="email" placeholder="Email" required>
                </div>
                <div class="form-group">
                    <textarea rows="5" placeholder="Message" required></textarea>
                </div>
                <button type="submit" class="btn">Send Message <i class="fas fa-paper-plane"></i></button>
            </form>
        </div>
    </section>

    <script src="script.js"></script>
</body>
</html>
