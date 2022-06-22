## React Self-Study

### Udemy üzerinde Mustafa Murat Coşkun & Engin Demiroğ tarafından verilen "Modern tekniklerle Web Geliştirme" kursu esnasında aldığım React notlarım

#### Önemli Notlar:

- React bir SPA(Single Page Application)'dır
- React'ta jsx yapısı vardır.
- React'ta en büyük sıkıntı bir component'ten diğerine veri taşınmasıdır.
- React her render çalıştığında tree of elemetns oluşturur
- Üst comp.'tan alt comp.'a veri taşınır ama alttan üste taşınmaz
- Component: Kullanıcı arayüzünün parçalarını ifade eder. Uygulamamız componentlerden oluşur
- 3 çeşit comp. vardır. Fonksiyon, class ve react hooks yapısıyla oluşturulan componentler

- render() metodu, bir sınıf bileşeni oluşturmak için gereken tek metottur.
- render() componentleri tekrar çalıştırmayı(yenilemeyi) sağlar.
- props : Bir componentten diğerine taşınan datadır
- state : Bir component'in datasıdır.
- reconciliation : Virtual DOM oluşturma sürecine verilen ad. Elementlerin component, prompts veya state'i değiştiğinde "tree"sini saklamaktan sorumlu.
