/**
* Template Name: iPortfolio
* Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
* Updated: Jun 29 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Header toggle
   */
  const headerToggleBtn = document.querySelector('.header-toggle');

  function headerToggle() {
    document.querySelector('#header').classList.toggle('header-show');
    headerToggleBtn.classList.toggle('bi-list');
    headerToggleBtn.classList.toggle('bi-x');
  }
  headerToggleBtn.addEventListener('click', headerToggle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.header-show')) {
        headerToggle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  const translations = {
    en: {
      'nav-home': 'Home',
      'nav-skills': 'Skills',
      'nav-experience': 'Experience',
      'nav-projects': 'Projects',
      'nav-about': 'About',
      'skills-title': 'Skills',
      'experience-title': 'Experience',
      'projects-title': 'Projects',
      'about-title': 'About me',
      'contact-title': 'Contact',
      'resume-education': 'Education',
      'resume-achievements': 'Achievements',
      'resume-work': 'Work Experience',
      'about-role': 'Unity Developer',
      'label-dob': 'Date of birth:',
      'label-phone': 'Phone:',
      'label-location': 'Location:',
      'label-location2': 'Szczecin, Poland',
      'label-age': 'Age:',
      'label-education': 'Education:',
      'label-sec': 'Secondary',
      'label-email': 'Email:',
      'project-intro': 'Below you can find my main projects. Click on a project to see detailed information: a short description, used technologies, trailer, repository link, and collaborators.',
      'about-intro': 'Hi, I’m Łukasz. I’m a Computer Science student and a graduate of an IT technical school. I have 4 months of professional experience in the industry. I live in Szczecin. Since 2019, I have been programming games in Unity. I create computer games while constantly developing my skills. I enjoy taking part in game jams and competitions, where I have also achieved success. In my free time, I am a gamer. My favourite genres are action and RPG games. I also strength train and have been playing electric guitar for 3 years.',
      'contact-intro': 'Thank you for visiting my website! If you have any questions or would like to get in touch, below are the ways you can contact me. See you soon!',
      'contact-call': 'Call me!',
      'contact-write': 'Email me!',
      'project-sylvan-title': 'Sylvan Secrets',
      'project-angel-title': 'PROJECT A.N.G.E.L',
      'project-python-title': 'Python Defence',
      'project-card-sylvan-desc': 'A 2D Vampire Survivors-style roguelike with online elements',
      'project-card-python-desc': 'A 2D Tower Defence game with Python programming elements',
      'project-card-angel-desc': 'A 3D roguelike with dynamic robot body part swapping mechanics',
      'label-engine': 'Engine',
      'label-type': 'Type',
      'label-repository': 'Repository',
      'label-offline-repo': 'Offline version repository',
      'label-trailer': 'Trailer',
      'label-gameplay': 'Gameplay',
      'label-team': 'Team',
      'project-home-breadcrumb': 'Home',
      'skill-csharp': 'C#',
      'skill-csharp-oop': 'Object Oriented Programming (OOP)',
      'skill-csharp-winforms': 'Building desktop applications with WinForms',
      'skill-csharp-libs': 'Using helper libraries',
      'skill-unity': 'Unity Engine',
      'skill-unity-logic': 'Creating gameplay logic for 2D and 3D games',
      'skill-unity-components': 'Creating components (MonoBehaviour, ScriptableObject, events)',
      'skill-unity-design': 'Basic Game Design',
      'skill-unity-ui': 'Designing scenes and responsive UI for mobile games',
      'skill-unity-graphics': 'Setting up graphics and animations',
      'skill-cpp': 'C/C++',
      'skill-cpp-oop': 'Object Oriented Programming (OOP)',
      'skill-cpp-template': 'Template',
      'skill-git-team': 'Using version control in a team',
      'skill-git-branches': 'Working with branches',
      'skill-git-conflicts': 'Resolving conflicts and merging',
      'skill-git-github': 'GitHub',
      'skills-languages': 'Languages',
      'skill-lang-english': 'Advanced English',
      'skill-lang-german': 'German at a communicative level',
      'skill-databases': 'Databases',
      'skills-os': 'Operating Systems',
      'skills-other': 'Other',
      'skills-soft': 'Soft Skills',
      'skill-db-basics': 'Database basics',
      'skill-db-sql': 'Writing advanced SQL queries',
      'skill-db-indexes': 'Creating functions and indexes',
      'skill-db-transactions': 'Transactions',
      'skill-os-maintenance': 'Maintenance and repair of computer hardware',
      'skill-os-windows': 'Knowledge of Windows and Linux',
      'skill-os-server': 'Basic knowledge of Windows Server',
      'skill-other-hardware': 'Computer hardware maintenance',
      'skill-other-algorithms': 'Algorithms and data structures',
      'skill-other-unreal': 'Basic Unreal Engine 5 (Blueprint)',
      'skill-other-office': 'MS-Office knowledge',
      'skill-soft-team': 'Teamwork',
      'skill-soft-communication': 'Communication',
      'skill-soft-learning': 'Fast learning',
      'exp-junior-prototype': 'Creating a 2D game prototype',
      'exp-junior-systems': 'Programming the main gameplay systems',
      'exp-junior-ui': 'Designing responsive and scalable UI',
      'exp-junior-mentoring': 'Mentoring from senior developers',
      'exp-junior-qa': 'Working with QA and designers',
      'exp-junior-git': 'Active use of Git version control',
      'exp-junior-team': 'Working in a small team',
      'exp-intern-project': 'Created game: ',
      'exp-intern-systems': 'Programming the main gameplay systems',
      'exp-intern-ai': 'Programming enemy AI',
      'exp-intern-mentoring': 'Mentoring from senior developers',
      'exp-intern-review': 'Code review',
      'exp-intern-git': 'Active use of Git version control',
      'exp-intern-team': 'Working in a 6-person team',
      'exp-hardware-maintain': 'Maintaining and repairing computer hardware',
      'exp-hardware-faults': 'Detecting faults',
      'exp-hardware-orders': 'Using an order management system',
      'exp-hardware-service': 'Customer service',
      'resume-uni-name': 'West Pomeranian University of Technology, Szczecin',
      'resume-uni-years': '2024 - present',
      'resume-uni-faculty': 'Faculty of Computer Science',
      'resume-uni-specialization': 'Specialization: Software Engineering',
      'resume-school-name': 'IT Technical School SCI, Szczecin',
      'resume-school-years': '2019 - 2024',
      'resume-school-title': 'Title obtained: IT Technician',
      'resume-school-qual': 'Qualifications: INF.02, INF.03',
      'achievement-ztgk-title': '2nd place in the mobile games category',
      'achievement-ztgk-date': '06.2025',
      'achievement-ztgk-text': 'We placed top 3 with my team in the ZTGK competition in Łódź',
      'achievement-ztgk-game': 'Game:',
      'achievement-ztgk-comp': 'Competition:',
      'achievement-elympics-title': '1st place in Community Vote',
      'achievement-elympics-date': '09.2024',
      'achievement-elympics-text': 'In the Elympics GameCamp Arena 2024 competition, where the task was to create a mobile game using their API, we won 1st place in the Community Vote category',
      'achievement-elympics-game': 'Game:',
      'achievement-elympics-comp': 'Competition:',
      'achievement-geek-title': '1st place at the regional stage',
      'achievement-geek-date': '05.2023',
      'achievement-geek-text': 'In the GEEK competition organized by PTI in the game implementation category, we won 1st place',
      'achievement-geek-game': 'Game:',
      'achievement-geek-comp': 'Competition:',
      'exp-junior-role': 'Junior Unity Developer',
      'exp-junior-company': 'Fabryka Gier',
      'exp-junior-dates': '11.2025 - 01.2025',
      'exp-intern-role': 'Intern Unity Developer',
      'exp-intern-company': 'Fabryka Gier',
      'exp-intern-dates': '08.2025 - 09.2025',
      'exp-hardware-role': 'Computer Hardware Technician - Intern',
      'exp-hardware-company': 'Digitalcomp',
      'exp-hardware-dates': '07.2022 - 08.2022',
      'project-sylvan-description': 'Sylvan Secrets is a mobile game originally created for the Elympics competition. It was built using their API and developed in that form. In the game, we play as a rabbit whose goal is to clear the forest of monsters and shadows. The gameplay revolves around defeating waves of monsters, earning points and experience, and upgrading your character every level by collecting stat modifiers or passive spells that help clear waves. With earned points, players enter the leaderboard and can compare themselves with players from around the world. In this project, my responsibilities included implementing the player character, passive items, and basic lights and visual effects. The biggest challenge turned out to be adding network components to objects and optimizing them. The game was developed for about a year. At the end of its development, I created an offline version completely independent of the API, whose build can be downloaded from <a href="https://github.com/GreeninZ/Sylvan-Offline">the second repository</a>. <br> The game won 1st place in the public vote at the Elympics competition in 2024 and placed top 3 in the mobile games category at ZTGK in 2025.<br><br>Team:<br>- Łukasz Stąporek<br>- Bartosz Kułakowski<br>- Dominik Sieklucki<br>- Damian Zioło<br>- Aniela Maciejek<br>- Helena Sawicka<br>- Zuzanna Pawluk',
      'project-angel-description': 'PROJECT A.N.G.E.L is a 3D roguelike dungeon crawler created during an internship with my 6-person team. The game was created in Unity and developed for about a month. In the game, we play as a robot whose goal is to defeat a rebel AI. The unique mechanic of the game is the ability to dynamically swap robot body parts or fully switch bodies. There are several parts of each type available, giving the player many possible combinations and varied gameplay. My responsibilities in the team included implementing body-part swapping, integrating parts with the inventory system, and enemy AI using State Machines, which was the biggest challenge. The game is in an early development stage. This project was a great opportunity for me to learn how the industry works, with mentoring from seniors and regular code reviews.<br><br>Team:<br>- Łukasz Stąporek<br>- Bartosz Kułakowski<br>- Dominik Sieklucki<br>- Damian Zioło<br>- Helena Sawicka<br>- Zuzanna Pawluk',
      'project-python-description': 'Python Defence is an action-tower defence game created in high school by me and 3 friends. The game was made in Unity. In the game, we play as a knight who must rebuild and defend a castle against attacking monsters. It is an educational game. To repair the buildings, we need to solve simple Python tasks. The game includes a built-in Python interpreter that checks code correctness and then verifies the program output. The hero has 3 abilities: Dash, a fireball, and a stunning lightning attack. In the project, I was the only programmer, so I was responsible for all mechanics, including the main character, enemy AI, the skill system, and the Python programming mechanics. The project was entered into the GEEK competition in 2023, where it won 1st place at the regional stage, and into the SCI++ school competition sponsored by Szczecin companies, which recognized several projects.<br><br>Team:<br>- Łukasz Stąporek<br>- Zuzanna Pawluk<br>- Aniela Maciejek<br>- Hubert Kiernożycki'
    },
    pl: {
      'nav-home': 'Strona główna',
      'nav-skills': 'Umiejętności',
      'nav-experience': 'Doświadczenie',
      'nav-projects': 'Projekty',
      'nav-about': 'O mnie',
      'skills-title': 'Umiejętności',
      'skills-languages': 'Języki',
      'skills-databases': 'Bazy Danych',
      'skills-os': 'Systemy operacyjne',
      'skills-other': 'Pozostałe',
      'skills-soft': 'Umiejętności miękkie',
      'experience-title': 'Doświadczenie',
      'projects-title': 'Projekty',
      'about-title': 'O mnie',
      'contact-title': 'Kontakt',
      'resume-education': 'Edukacja',
      'resume-achievements': 'Osiągnięcia',
      'resume-work': 'Doświadczenie',
      'about-role': 'Unity Developer',
      'label-dob': 'Data urodzenia:',
      'label-phone': 'Numer telefonu:',
      'label-location': 'Miejsce zamieszkania:',
      'label-location2': 'Szczecin, Polska',
      'label-age': 'Wiek:',
      'label-education': 'Wykształcenie:',
        'label-sec': 'Średnie',
      'label-email': 'Email:',
      'project-intro': 'Poniżej znajdziesz moje główne projekty. Kliknij w projekt, aby zobaczyć szczegóły: krótkie opisy, użyte technologie, zwiastun, link do repozytorium i współtwórców.',
      'about-intro': 'Cześć, jestem Łukasz. Jestem studentem informatyki i absolwentem technikum informatycznego. Mam 4 miesiące doświadczenia zawodowego w branży. Mieszkam w Szczecinie. Od 2019 roku tworzę gry w Unity. Tworzę gry komputerowe, stale rozwijając swoje umiejętności. Lubię brać udział w game-jamach i konkursach, gdzie również odniosłem sukcesy. W wolnym czasie gram w gry. Moje ulubione gatunki to akcji i RPG. Trenuję też siłowo i gram na gitarze elektrycznej od 3 lat.',
      'contact-intro': 'Dziękuję za odwiedzenie mojej strony! Jeśli masz pytania lub chcesz się ze mną skontaktować, poniżej znajdziesz sposoby kontaktu. Do zobaczenia!',
      'contact-call': 'Telefon',
      'contact-write': 'Napisz',
      'project-sylvan-title': 'Sylvan Secrets',
      'project-angel-title': 'PROJECT A.N.G.E.L',
      'project-python-title': 'Python Defence',
      'project-card-sylvan-desc': '2D roguelike w stylu Vampire Survivors z elementami sieciowymi',
      'project-card-python-desc': '2D gra typu Tower Defence z elementami nauki Pythona',
      'project-card-angel-desc': '3D roguelike z dynamiczną zmianą części ciała robota',
      'label-engine': 'Silnik',
      'label-type': 'Typ',
      'label-repository': 'Repozytorium',
      'label-offline-repo': 'Repozytorium wersji offline',
      'label-trailer': 'Zwiastun',
      'label-gameplay': 'Rozgrywka',
      'label-team': 'Zespół',
      'skill-csharp-oop': 'Programowanie obiektowe (OOP)',
      'skill-csharp-winforms': 'Tworzenie aplikacji desktopowych w WinForms',
      'skill-csharp-libs': 'Korzystanie z bibliotek pomocniczych',
      'skill-unity-logic': 'Tworzenie logiki gry dla gier 2D i 3D',
      'skill-unity-components': 'Tworzenie komponentów (MonoBehaviour, ScriptableObject, events)',
      'skill-unity-design': 'Podstawy game designu',
      'skill-unity-ui': 'Projektowanie scen i responsywnego UI dla gier mobilnych',
      'skill-unity-graphics': 'Ustawianie grafik i animacji',
      'skill-cpp-oop': 'Programowanie obiektowe (OOP)',
      'skill-cpp-template': 'Szablony',
      'skill-git-team': 'Używanie systemu kontroli wersji w zespole',
      'skill-git-branches': 'Praca na gałęziach',
      'skill-git-conflicts': 'Rozwiązywanie konfliktów i scalanie zmian',
      'skill-git-github': 'GitHub',
      'skill-lang-english': 'Zaawansowany angielski',
      'skill-lang-german': 'Niemiecki na poziomie komunikacyjnym',
      'skill-db-basics': 'Podstawy baz danych',
      'skill-db-sql': 'Pisanie zaawansowanych zapytań SQL',
      'skill-db-indexes': 'Tworzenie funkcji i indeksów',
      'skill-db-transactions': 'Transakcje',
      'skill-os-maintenance': 'Konserwacja i naprawa sprzętu komputerowego',
      'skill-os-windows': 'Znajomość Windows i Linux',
      'skill-os-server': 'Podstawowa znajomość Windows Server',
      'skill-other-hardware': 'Konserwacja sprzętu komputerowego',
      'skill-other-algorithms': 'Algorytmy i struktury danych',
      'skill-other-unreal': 'Podstawy Unreal Engine 5 (Blueprint)',
      'skill-other-office': 'Znajomość MS Office',
      'skill-soft-team': 'Praca zespołowa',
      'skill-soft-communication': 'Komunikacja',
      'skill-soft-learning': 'Szybkie uczenie się',
      'exp-junior-prototype': 'Tworzenie prototypu gry 2D',
      'exp-junior-systems': 'Programowanie głównych systemów rozgrywki',
      'exp-junior-ui': 'Projektowanie responsywnego i skalowalnego UI',
      'exp-junior-mentoring': 'Mentoring od seniorów',
      'exp-junior-qa': 'Współpraca z QA i designerami',
      'exp-junior-git': 'Aktywne używanie systemu kontroli wersji Git',
      'exp-junior-team': 'Praca w małym zespole',
      'exp-intern-project': 'Stworzona gra: ',
      'exp-intern-systems': 'Programowanie głównych systemów rozgrywki',
      'exp-intern-ai': 'Programowanie AI przeciwników',
      'exp-intern-mentoring': 'Mentoring od seniorów',
      'exp-intern-review': 'Code review',
      'exp-intern-git': 'Aktywne używanie systemu kontroli wersji Git',
      'exp-intern-team': 'Praca w 6-osobowym zespole',
      'exp-hardware-maintain': 'Konserwacja i naprawa sprzętu komputerowego',
      'exp-hardware-faults': 'Wykrywanie usterek',
      'exp-hardware-orders': 'Obsługa systemu zarządzania zamówieniami',
      'exp-hardware-service': 'Obsługa klienta',
      'resume-uni-name': 'Zachodniopomorski Uniwersytet Technologiczny w Szczecinie',
      'resume-uni-years': '2024 - obecnie',
      'resume-uni-faculty': 'Wydział Informatyki',
      'resume-uni-specialization': 'Specjalizacja: Inżynieria Oprogramowania',
      'resume-school-name': 'Technikum Informatyczne SCI w Szczecinie',
      'resume-school-years': '2019 - 2024',
      'resume-school-title': 'Zdobyty tytuł: Technik Informatyk',
      'resume-school-qual': 'Osiągnięte kwalifikacje: INF.02, INF.03',
      'achievement-ztgk-title': '2. miejsce w kategorii gier mobilnych',
      'achievement-ztgk-date': '06.2025',
      'achievement-ztgk-text': 'Zajęliśmy 3. miejsce w konkursie ZTGK w Łodzi',
      'achievement-ztgk-game': 'Gra:',
      'achievement-ztgk-comp': 'Konkurs:',
      'achievement-elympics-title': '1. miejsce w kategorii Community Vote',
      'achievement-elympics-date': '09.2024',
      'achievement-elympics-text': 'W konkursie Elympics GameCamp Arena 2024, w którym zadaniem było stworzenie gry mobilnej z użyciem ich API, zajęliśmy 1. miejsce w kategorii Community Vote',
      'achievement-elympics-game': 'Gra:',
      'achievement-elympics-comp': 'Konkurs:',
      'achievement-geek-title': '1. miejsce na etapie wojewódzkim',
      'achievement-geek-date': '05.2023',
      'achievement-geek-text': 'W konkursie GEEK organizowanym przez PTI w kategorii implementacji gry nasz zespół zdobył 1. miejsce',
      'achievement-geek-game': 'Gra:',
      'achievement-geek-comp': 'Konkurs:',
      'exp-junior-role': 'Junior Unity Developer',
      'exp-junior-company': 'Fabryka Gier',
      'exp-junior-dates': '11.2025 - 01.2025',
      'exp-intern-role': 'Intern Unity Developer',
      'exp-intern-company': 'Fabryka Gier',
      'exp-intern-dates': '08.2025 - 09.2025',
      'exp-hardware-role': 'Technik sprzętu komputerowego - stażysta',
      'exp-hardware-company': 'Digitalcomp',
      'exp-hardware-dates': '07.2022 - 08.2022',
      'project-home-breadcrumb': 'Start',
      'project-sylvan-description': 'Sylvan Secrets to gra mobilna pierwotnie stworzona na konkurs Elympics. Powstała z użyciem ich API i w tej formie była rozwijana. W grze wcielamy się w królika, który ma na celu oczyścić las z potworów i cieni. Gra polega na zabijaniu kolejnych fali potworów zdobywając punkty i doświadczenie za które z każdym poziomem można ulepszać swoją postać zdobywająć modyfikatory do statystyk bądź pasywne czary, które pomagają w czyszczeniu fal. Ze zdobytymi punktami gracze trafiają do tabeli wyników, gdzie mogą się porównywać z innymi graczami na całym świecie. W projekcie moją rolą była implementacja postaci gracza, itemów pasywnych, dodanie podstawowych świateł i efektów graficznych. Największym wyzwaniem okazało się jednak dodawanie komponentów sieciowych do obiektów oraz ich optymalizacja. Gra była rozwijana około roku. Na koniec jej rozwoju postanowiłem zrobił wersję offline całkowicie niezależną od API, której builda można pobrać z <a href="https://github.com/GreeninZ/Sylvan-Offline">drugiego repozytorium</a>. <br> Gra zdobyła 1 miejsce w głosowaniu publiczności w konkursie Elympics w 2024 roku oraz top 3 w kategorii grach mobilnych na ZTGK w 2025 roku..<br><br>Zespół:<br>- Łukasz Stąporek<br>- Bartosz Kułakowski<br>- Dominik Sieklucki<br>- Damian Zioło<br>- Aniela Maciejek<br>- Helena Sawicka<br>- Zuzanna Pawluk',
      'project-angel-description': 'PROJECT A.N.G.E.L to 3D roguelike dungeon crawler stworzony podczas stażu z moim 6-osobowym zespołem. Gra została stworzona w Unity i rozwijana przez około miesiąc. W grze wcielamy się w robota, którego celem jest pokonanie buntującej się AI. Unikalną mechaniką gry jest możliwość dynamicznej wymiany części ciała robota lub całkowitej zmiany ciała. Dostępnych jest kilka części każdego typu, co daje graczowi wiele kombinacji i zróżnicowaną rozgrywkę. Moje obowiązki w zespole obejmowały implementację zamiany części ciała, integrację części z systemem ekwipunku oraz AI przeciwników z użyciem automatów stanów, co było największym wyzwaniem. Gra jest we wczesnym etapie rozwoju. Ten projekt był świetną okazją do nauczenia się, jak działa branża, z mentoringiem seniorów i regularnymi code review.<br><br>Zespół:<br>- Łukasz Stąporek<br>- Bartosz Kułakowski<br>- Dominik Sieklucki<br>- Damian Zioło<br>- Helena Sawicka<br>- Zuzanna Pawluk',
      'project-python-description': 'Python Defence to gra typu action-tower defence stworzona w liceum przeze mnie i 3 znajomych. Gra została wykonana w Unity. W grze wcielamy się w rycerza, który musi odbudować i obronić zamek przed atakującymi potworami. To gra edukacyjna. Do naprawy budynków potrzebujemy rozwiązywać proste zadania z Pythona. Gra zawiera wbudowany interpreter Pythona, który sprawdza poprawność kodu, a następnie weryfikuje wynik programu. Bohater ma 3 umiejętności: Dash, kulę ognia i uderzenie piorunem. W projekcie byłem jedynym programistą, więc odpowiadałem za wszystkie mechaniki, w tym główną postać, AI przeciwników, system umiejętności i mechanikę programowania w Pythonie. Projekt został zgłoszony do konkursu GEEK w 2023 roku, gdzie zdobył 1. miejsce na etapie regionalnym, oraz do szkolnego konkursu SCI++ sponsorowanego przez szczecińskie firmy, który docenił kilka projektów.<br><br>Zespół:<br>- Łukasz Stąporek<br>- Zuzanna Pawluk<br>- Aniela Maciejek<br>- Hubert Kiernożycki'
    }
  };

  function applyLanguage(lang) {
    const dict = translations[lang] || translations.en;
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      if (dict[key]) {
        element.textContent = dict[key];
      }
    });
    document.querySelectorAll('[data-i18n-html]').forEach(element => {
      const key = element.getAttribute('data-i18n-html');
      if (dict[key]) {
        element.innerHTML = dict[key];
      }
    });
    document.querySelectorAll('.lang-btn').forEach(button => {
      button.classList.toggle('active', button.getAttribute('data-lang') === lang);
    });
    const typed = document.querySelector('.typed');
    if (typed) {
      const strings = typed.getAttribute(lang === 'pl' ? 'data-typed-items-pl' : 'data-typed-items-en') || typed.getAttribute('data-typed-items');
      if (strings) {
        if (window.typedInstance) {
          window.typedInstance.destroy();
        }
        window.typedInstance = new Typed('.typed', {
          strings: strings.split(','),
          loop: true,
          typeSpeed: 100,
          backSpeed: 50,
          backDelay: 2000
        });
      }
    }
  }

  document.querySelectorAll('.lang-btn').forEach(button => {
    button.addEventListener('click', () => applyLanguage(button.getAttribute('data-lang')));
  });

  applyLanguage('en');

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Animate the skills items on reveal
   */
  let skillsAnimation = document.querySelectorAll('.skills-animation');
  skillsAnimation.forEach((item) => {
    new Waypoint({
      element: item,
      offset: '80%',
      handler: function(direction) {
        let progress = item.querySelectorAll('.progress .progress-bar');
        progress.forEach(el => {
          el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
      }
    });
  });

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();