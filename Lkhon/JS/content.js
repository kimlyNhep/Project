var contentController = (function() {
  var Content = function(
    id,
    imgSrc,
    title,
    about,
    history,
    worldHeritage,
    reference
  ) {
    (this.id = id),
      (this.imgSrc = imgSrc),
      (this.title = title),
      (this.about = about),
      (this.history = history),
      (this.worldHeritage = worldHeritage),
      (this.reference = reference);
  };

  var contentList = []; // list of card
  return {
    addContent: function(src, title, about, history, worldHeritage, reference) {
      let ID;
      if (contentList.length > 0) {
        ID = contentList[contentList.length - 1].id + 1;
      } else ID = 0;
      var content = new Content(
        ID,
        src,
        title,
        about,
        history,
        worldHeritage,
        reference
      );

      //push to content list
      contentList.push(content);

      //return new content
      return content;
    },
    getCardList: function() {
      return contentList;
    }
  };
})();

var UIController = (function() {
  var DOMString = {
    titleLabel: "content__heading",
    asideLabel: "side__header",
    aboutTextLabel: "sub--heading__about",
    aboutText: "about__text",
    historyTextLabel: "sub--heading__History",
    historyText: "history__text",
    worldHeritageTextLabel: "sub--Heading__world-Heritage",
    worldHeritageText: "world-Heritage__text",
    referenceTextLabel: "sub--heading__reference",
    referenceText: "reference__text",
    imageSrc: "image__Src"
  };
  return {
    addContentUI: function(content) {
      document.getElementById(DOMString.titleLabel).innerHTML = content.title;
      document.getElementById(DOMString.aboutText).innerHTML = content.about;
      document.getElementById(DOMString.historyText).innerHTML =
        content.history;
      document.getElementById(DOMString.worldHeritageText).innerHTML =
        content.worldHeritage;
      document.getElementById(DOMString.referenceText).innerHTML =
        content.reference;
      document.getElementById(DOMString.aboutTextLabel).innerHTML =
        "១.អំពី" + content.title;
      document.getElementById(DOMString.asideLabel).innerHTML =
        "អំពី" + content.title;
      document.getElementById(DOMString.imageSrc).childNodes[1].src =
        content.src;
    },
    getDOMString: function() {
      return DOMString;
    }
  };
})();

var Controller = (function(contentCtrl, UICtrl) {
  let contentArr = [];
  var addContent = function() {
    contentArr.push({
      src: `../images/lakhon-khol__content.jpg`,
      title: "ល្ខោនខោល",
      about:
        "&emsp;ល្ខោនខោល ឬ ល្ខោនពាក់របាំងមុខ គឺជាល្ខោនមួយ ដែលមានលក្ខណៈចំណាស់របស់កម្ពុជា មានដើមកំណើតនៃការ សម្តែងមុនសម័យអង្គរ។ វាត្រូវបានគេជឿជាក់ថាបានចាប់ផ្តើមក្នុងអំឡុងប្រហែលសតវត្សទី៩ តាមរយៈចម្លាក់លឹប នៅតាមជញ្ជាំងអង្គរ។ ក្នុងសម័យអង្គរ ល្ខោនខោលត្រូវបានអភិវឌ្ឍដោយបុរសទាំងស្រុង ក្នុងការរាំប្រចាំ នៅព្រះរាជវាំងបុរាណខ្មែរ។ ហេតុផលដែលពិតប្រាកដនៅតែ មិនទាន់ដឹងច្បាស់ ប៉ុន្តែអ្នកស្រាវជ្រាវបានបង្ហាញថា ដោយសារការដុះដាលនៃសាសនាធ្វើឲ្យ សាសនាព្រាហ្មណ៍ មានជម្លោះជាមួយសាសនាព្រះពុទ្ធ ក្នុងរាជកាលព្រះបាទជ័យវរ្ម័នទី៨(១២៤៣- ១២៩៥)។ ក្នុងនោះមាននារីរបាំជាច្រើនត្រូវបានសម្លាប់ និងធ្វើជាស្រីកំណាន់ ដូច្នេះទើបមាន ការហ្វឹកហាត់អ្នករបាំបុរស ដើម្បីបង្កើតរបាំនេះផ្អែកទៅលើលិទ្ឋអ្នកកាន់សាសនាព្រះពុទ្ធ។ រឿងមួយទៀត ដែលជាក់លាក់អំពីការសម្ដែងដោយល្ខោនខោលគឺ រឿងរាមកេរ្តិ៍ ដែលជារឿងព្រេងរបស់ខ្មែរ សម័យរាមាយណៈ។ ការសម្ដែង រួមបញ្ចូលនូវការប្រាប់អំពីអ្នកនិទានរឿង ដែលដើរតួ សំខាន់ក្នុងការសម្ដែង និងវង់ភ្លេងបុរាណគឺ វង់ភ្លេងពិណពាទ្យ។ ល្ខោនគឺមានប្រជាប្រិយភាព ក្នុងសម័យលន់នល់ និងពេលបន្ទាប់មកក៍ក្លាយជាមហេសីសំណព្វរបស់ស្តេច សីហនុ។ ពេលនោះមាន៨ក្រុមល្ខោនដែលមានជំនាញ ហើយបន្ទាប់មកត្រូវបែកខ្ញែកដោយសារសង្គ្រាម តែនៅពេលបច្ចុប្បន្ននេះនៅសល់តែមួយក្រុមគឺនៅ វត្តស្វាយអណ្ដែត ចំងាយ ១៥គីឡូម៉ែត ពីទីក្រុងភ្នំពេញ។ ក្រុមថ្មីពីរ ទៀតបានចាប់ផ្តើមក្នុងសង្គ្រាមរួមមានក្រុមកំពង់ធំ និងក្រុមល្ខោនជាតិ ដែលមកពីមន្ទីរវិចិត្រសិល្បៈ និងក្រសួងវប្បធម៌ និងវិចិត្រសិល្បៈ។ ហើយបច្ចុប្បន្ននេះ ល្ខោន ខោល ក៏ជាផ្នែកមួយនៅក្នុងតារាងកាលវិភាគសិក្សានៅសកលវិទ្យាល័យវិចិត្រសិល្បៈផងដែរ៕",
      history:
        "&emsp;ដោយទៅតាមវចនានុក្រមរបស់សម្តេចព្រះសង្ឍរាជ ជួន ណាត បានមានសង្ឃដិការថា ពាក្យថា “ខោល ឬល្ខោនខោល” ជាពួកល្ខោនប្រុសមួយពួកដែលបានសម្តែងពីរឿង រាមកេរ្តិ៍ ឬរឿងរាមាយាណៈ។ លោក វង់ សុធារ៉ា ជាសាស្ត្រចារ្យសិលាចារឹកសាស្ត្ររបស់របស់ព្រះរាជាណាចក្រកម្ពុជាបានបង្ហាញបញ្ជាក់ថា ល្ខោនខោលត្រូវបានបង្កើតឡើងតាំងពីសម័យមុនអង្គរ ឬសម័យអង្គរមកម្ល៉េះ។ តាមសិលាចារិក ២ផ្ទាំងដែលមាន ដោយ សិលាចារិកទី១ មានលេខ K99 នៅក្នុងបរិវាណប្រាសាទសម្បូរព្រៃគុក ដែលនៅក្នុងរជ្ជកាល ព្រះបាទ ឥសានវរ្ម័នទី១ នៅក្នុងស.វទី ៧(៦១៦ ដល់ ៦៣៥) ដែលត្រូវបានសរសេរឡើងនៅរជ្ជកាលរបស់ព្រះបាទជ័យវរ្ម៍នទី៥ នៅស.វទី១០ (៩៦៨ ដល់១០០១) ត្រូវបានបង្ហាញពី ព្រាហ្មណ៍បុរោហិតម្នាក់ ដែលបានគ្រប់គ្រងនៅក្នុងរាធានី ភវបុរៈ បានបញ្ជួនអ្នកបម្រើចំនួន៥០ នាក់ឱ្យនៅបម្រើព្រះបាទ ជ័យវរ្ម័នទី៥ នៅក្នុងវាំង (ក្រុងអង្គរ) ដោយក្នុងនោះមានអ្នកបម្រើ ៦នាក់ដែលត្រូវបានបម្រើនៅក្នុងផ្ទះនាងខោល (កន្លែងហាត់ល្ខោនខោល)។ សិលាចារិកទី២ដែលមានលេខ K1227 ស្ថិតនៅដងស្ទឹងត្រែង ក្នុងខេត្ត បន្ទាយមានជ័យបាននិយាយពី មន្ត្រីម្នាក់ឈ្មោះ វ្រះកម្រងតាងអញស្រ៊ីឥសានសីវៈវម៌្ម ជាមន្ត្រីប្រធានដែលធ្វើការនៅក្នុងរោងខោលតែម្តង។ បើតាមសំដីរបស់អ្នកស្រី ពៅ សៅវរស បាននិយាយថា ល្ខោនខោលជាប្រភេទល្ខោនមួយក្រុមដែលមានទម្រង់ចេញពីរបាំព្រះរាជទ្រព្យរបស់ខ្មែរ និងបានបន្ថែមទៀតថា ល្ខោនខោលនេះ ក្នុងសម័យអង្គរមានឈ្មោះថា ភានី ដោយពាក្យថាភានី មកពីភាសាសំស្ក្រឹតថា ភានៈ មានន័យថា អ្នកសូត្រ ឬអ្នកពោល។ បានជាគាត់ហ៊ានសនិដ្ឋានបែបនេះ ព្រោះដោយសារតែនៅក្នុងការសម្តែងល្ខោនខោល មិនមានតួអង្គសម្តែងជាអ្នកនិយាយនោះទេ ដោយត្រូវបានបុគ្គលម្នាក់ទៀតដែលបញ្ជូលសម្លេងជំនួសឱ្យ តួអង្គសម្តែង។ ដោយយើងសង្កេតជាក់ស្តែងនៅតាមប្រាសាទនីមួយៗរបស់ប្រទេសកម្ពុជាក៏គេសង្កេតឃើញថា រឿងរាមកេរ្តិ៍ ឬរឿងរាមាយណៈ នៅតាមជញ្ជាំងប្រាសាទ, ផ្តែ និងហោជាងជាច្រើនរាបមិនអស់។ ជាពិសេសប្រាសាទនៅក្នុងរចនាបថ គូលេន ដល់រចនាបថ បាយ័ន្ន ដែលបានបង្ហាញពី រូបចម្លាក់យ៉ាងច្បាស់ នៃមនុស្សពាក់មុខស្វា និងយក្សជាច្រើនបែបនេះ ប្រយុទ្ធគ្នា នៅក្នុងរឿងរាមកេរ្តិ៍ ឬរឿងរាមាយណៈ នេះ។ម្យ៉ាងវិញទៀត ល្ខោនខោលនេះពុំត្រូវបានបាត់រលត់នៅសម័យអង្គរធាក់ចុះនោះទេ ល្ខោននេះក៏ត្រូវបានបន្តមកដល់កូនចៅ ក្នុងសម័យក្រោយអង្គរទៀត ។ គេឃើញមានផ្ទាំងរូបផាត់ព៌ណ នៅក្នុងវត្តបុរាណរបស់ខ្មែរ ដូចជា វត្តបូព៌ វត្តដំរីស និងវត្តជាច្រើនទៀតដែលត្រូវបានកសាង នៅក្នុងស.វទី ១៩ ដែលបាននិយាយរៀបរាប់រឿងរាមកេរ្តិ៍របស់ខ្មែរ។ ជាពិសេសនៅក្នុងរោងទងវិចិត្រកម្មរឿងរាមកេរ្តិ៍ ក្នុងវាំងរបស់ព្រះរាជាណាចក្រកម្ពុជា កមានរូបផាត់ព៌ណរឿងរាមកេរ្តិ៍ ដែលត្រូវបានកសាងនៅក្នុងស.វទី ១៩ ផងដែរ។ ដោយតាមឯកសារបស់បារាំង ដែលបានប្រគល់ជួនប្រទេសកម្ពុជា មានបង្ហាញពីការសម្តែងល្ខោនខោលជាច្រើនរូបភាព នៅក្នុងកម្មវិធីធំៗនាក្នុងសម័យអាណានិគមនិយមបារាំង (១៨៦០ ដល់ ១៩៥០)។ មិនតែប៉ុណ្ណោះ នៅក្នុងសារមន្ទីប្រទេសបារាំងបានធ្វើការរក្សាទុក ខ្មុកល្ខោនខោល (មុខល្ខោនខោល) នៅក្នុងស.វទី១៦ ទៀតផង។ ដោយមានអំណះអំណាងបែបនេះហើយ សបញ្ចាក់ឱ្យឃើញថា ល្ខោនខោល ជាល្ខោនមួយប្រភេទដែលមានអាយុកាលតាំងពីសម័យមុនអង្គរ ឬសម័យអង្គរមកម្ល៉េះ។",
      worldHeritage:
        "&emsp;អង្គការ​ យូណេស្កូ (UNESCO)​ សម្រេចទទួលស្គាល់ និង​ដាក់បញ្ចូលល្ខោនខោល ក្នុង​បញ្ជី​​បេតិកភណ្ឌ​​វប្បធម៌​អរូបិយ​នៃ​មនុស្ស​ជាតិ នៅ​ក្នុង​កិច្ចប្រជុំលើកទី​១៣ នៃ​គណៈកម្មការ​អន្តរ​រដ្ឋាភិបាល សម្រាប់​ការ​​ការពារ​​សម្បត្តិ​​បេតិកភណ្ឌ​​វប្បធម៌​​អរូបី​របស់​អង្គការ​​យូណេស្កូ​ ​កាលពី​ថ្ងៃ​ពុធ ទី​២៨ វិច្ឆិកា ​ឆ្នាំ២០១៨ នៅ​ទីក្រុង ព័រល្វី (Portlouis) នៃ​​សាធារណៈរដ្ឋ​ម៉ូរីស (Maurice)។ សេចក្តីជូន​ដំណឹងក្រសួងវប្បធម៌ និង​វិចិត្រសិល្បៈ ប្រកាសជាផ្លូវការថា នេះ​ជាមោទភាពមួយ​របស់​កម្ពុជា។ ក្រសួងនេះបញ្ជាក់ថា​ បេតិកភណ្ឌ​វប្បធម៌ ទាំង​រូបី និង​អរូបី របស់​ជាតិ បាន​ចូលរួម​ចំណែក​ធ្វើ​ឲ្យ​កេរ្តិ៍​ឈ្មោះ​​របស់​​ប្រទេស​​កម្ពុជា ល្បី​​រន្ទឺ​លើឆាកអន្តរជាតិ ព្រមទាំងជាតួរអង្គ​ដ៏លេចធ្លោមួយលើ​វេទិកា​បេតិកភណ្ឌ​ពិភពលោក​ថែមទៀតផង។ មេដឹកនាំ​របប​ក្រុងភ្នំពេញ លោក ហ៊ុន សែន ភ្លាមៗ នោះ ក៏​បាន​ផ្ញើសារ​ជូន​ជន​រួម​ជាតិ អបអរសាទរ​​ល្ខោនខោល​ដែល​​បាន​​ដាក់​បញ្ចូល​ក្នុង​បញ្ជី​​បេតិកភណ្ឌ​​ពិភពលោក​​នេះ​ដែរ​។ លោកបានចាត់ទុកថា នេះជាសមិទ្ធផលដ៏វិសេសវិសាលមួយ និង​​ជា​មោទនភាព​ថ្មីមួយទៀត សម្រាប់ប្រជាពលរដ្ឋ និង​ប្រទេស​កម្ពុជា។ ក្នុងសារលិខិត​របស់​លោក ហ៊ុន សែន ដែលចេញផ្សាយកាលពីយប់​ថ្ងៃ​ទី២៨ ខែ​វិច្ឆិកា​នោះ លោក​ក៏​បាន​អំពាវនាវ​ឲ្យ​ពលរដ្ឋ​កម្ពុជា​គ្រប់​រូប​បន្តចូលរួមជួយលើតម្កើងតម្លៃ​បេតិកភណ្ឌ​វប្បធម៌ និង​ថែ​រក្សា​ការ​ពារ​សម្បត្តិ​បេតិកភណ្ឌ​​វប្បធម៌​កម្ពុជា​​ឲ្យ​​បាន​គង់វង្ស។ ដើម្បីអបអរសមិទ្ធផលនេះ លោកក៏សូមឲ្យ​វាយ​​គង ទូង​ស្គ គោះ​ត្រដោក និង​​តាម​គ្រប់​មធ្យោបាយ​ដែល​​មាន​ នៅ​​ម៉ោង ១០ យប់​​ថ្ងៃ​សុក្រ ទី៣០ វិឆ្ឆិកា នៅ​​គ្រប់​​ទី​កន្លែង​​សាធារណៈ​​សំខាន់ៗ​និង​​តាម​​ទី​វត្ត​​អារាម​​ជា​ដើម៕",
      reference: `<ul>
      <li>
        <a
          href="https://www.facebook.com/tontantot1012/posts/2187612281509210"
          >https://www.facebook.com/tontantot1012/posts/2187612281509210</a
        >
      </li>
      <li>
        <a
          href="https://www.rfa.org/khmer/news/culture/Lakhoan-khoal-11292018051158.html"
          >https://www.rfa.org/khmer/news/culture/Lakhoan-khoal-11292018051158.html</a
        >
      </li>
      <li>
        <a
          href="https://km.wikipedia.org/wiki/%E1%9E%9B%E1%9F%92%E1%9E%81%E1%9F%84%E1%9E%93%E1%9E%81%E1%9F%84%E1%9E%9B"
          >https://km.wikipedia.org/wiki/%E1%9E%9B%E1%9F%92%E1%9E%81%E1%9F%84%E1%9E%93%E1%9E%81%E1%9F%84%E1%9E%9B</a
        >
      </li>
    </ul>`
    });

    contentArr.push({
      src: `../images/lakhon-basac__content.jpg`,
      title: "ល្ខោនបាសាក់",
      about:
        "&emsp;ទម្រង់​សិល្បៈ​ទស្សនីយភាព​ខ្មែរ​បាន​យោន​យក​ឈ្មោះ​ក្នុង​លក្ខណៈ​ខុស​ៗ ប្លែក​គ្នា​ជា​ច្រើន។ ទម្រង់​ខ្លះ​បាន​យក​ឈ្មោះ​ចេញ​អំពី​ឧបករណ៍​តន្ត្រី ឫ វង់​តន្ត្រី ណា​មួយ ដូចជា​ល្ខោន​យីកេ ឫ​ល្ខោន​មហោរី​ជា​ដើម។ ប៉ុន្តែ​ទម្រង់​ខ្លះ​ទៀត​បាន​យក​ឈ្មោះ​ពី​សិល្ប​ករ​ដែល​មាន​ប្រជាប្រិយ​ភាព​ខ្លាំង​លើស​លប់​ដូចជា​សិល្បៈ​ចម្រៀង​អាយ៉ៃ។ចំណែក​ល្ខោន​បាសាក់​វិញ ក៏​មិន​ខុស​ពី​ទម្រង់​ដទៃ​ទៀត​ប៉ុន្មាន​ដែរ ប៉ុន្តែ​បាន​យក​ឈ្មោះ​របស់​ខ្លួន​ពី​ទី​កន្លែង​កំណើត​នៃ​ទម្រង់​សិល្បៈ​នេះ​បាន​រីក​ចម្រើន​ទៅ​វិញ ពោល​គឺ​ល្ខោន​បាសាក់​មាន​ដើម​កំណើត​នៅ​ស្រុក​បាសាក់​ខេត្ត​ឃ្លាំង​ទល់​មុខ​ព្រះ​ត្រពាំង​កម្ពុជា​ក្រោម ។ ទឹក​ដី​កម្ពុជា​ក្រោម​នេះ​ត្រូវ​បាន​ពួក​អាណានិគម​និយម​បារាំង​កាត់​ទៅ​ឲ្យ​វៀតណាម ថ្ងៃ​ទី ២១ ខែ ឧសភា ឆ្នាំ ១៩៤៩។ ឥឡូវ​ស្ថិត​នៅ “ភាគ​ខាង​ត្បូង​នៃ​សាធារណរដ្ឋ​សង្គម​និយម​វៀតណាម​សព្វ​ថ្ងៃ”។ បាសាក់​ ជា​ឈ្មោះ​ទន្លេ​មួយ​ដែល​ជា ខ្នែង​មួយ​នៃ​ទន្លេ​មេគង្គ​ទាំង​បួន​​ដែល​ប្រសព្វ​គ្នា​នៅ​ភ្នំ​ពេញ “ចតុម្មុខ” ។ ទន្លេ​នេះ​បាន​ហូរ​កាត់​ទៅ​ទិស​ខាង​ត្បូង​ចាក់​ទៅ​ក្នុង​ឈូង​សមុទ្រ​ចិន ហើយ​នៅ​លើ​ដង​ទន្លេ​នេះ​ហើយ​ដែល​ជា​ទី​តាំង​នៃ​ស្រុក​បាសាក់ ខេត្ត​ឃ្លាំង​ទល់​មុខ​នឹង​ខេត្ត​ព្រះ​ត្រពាំង ដែល​ល្ខោន​បាសាក់​បាន​ចាប់​កំណើត​ឡើង ។ តំបន់​នេះ​ក៏​ដូច​ជា​តំបន់​ដទៃ​ទៀត ​មាន​ប្រជា​ជន​ខ្មែរ​រស់​នៅ​ច្រើន​ជា​តំបន់​មាន​អារ្យធម៌ និង​មាន​កេរ​ដំណែល​វប្បធម៌​ខ្មែរ​ពី​បរម​បុរាណ​ច្រើន​ដូចជា​ប្រាសាទ ស្រះ​បុរាណ ​វត្ត​អារាម តន្ត្រី​ច្រើន​វង់ និង​ល្ខោន​ច្រើន​ប្រភេទ ដូចជា​យីកេរ្តិ៍ និង​ល្ខោន​យក្ស​រាំ​ជា​ដើម ។ល។ និង ។ល។",
      history:
        "&emsp;  ក្នុង​ឆ្នាំ ១៩៣០ ក្នុង​ពេល​ដែល​ទម្រង់​នេះ​រីក​ចម្រើន​នៅ​កម្ពុជា​ក្រោម “វៀតណាម ខាង​ត្បូង”​ថៅ​កែ​ក្រុម​ល្ខោន​ឈ្មោះ​លោក ឆា​គ្រួន នេះ​បាន​នាំ​ក្រុម​សិល្បៈ​ល្ខោន របស់​ខ្លួន​មក​សម្ដែង​ធ្វើ​អាជីវកម្ម​នៅ​ភ្នំពេញ និង​ខេត្ត​នានា​ក្នុង​ប្រទេស​កម្ពុជា ។ ដំណើរ​បេសកកម្ម​ទី១ របស់​ក្រុម​ល្ខោន​លោក ឆា​គ្រួន​ដែល​បាន​មក​សម្ដែង​នៅ ប្រទេស​កម្ពុជា មិន​សូវ​ទទួល​បាន​ជោគ​ជ័យ​ទេ មូល​ហេតុ​មក​ពី​ទម្រង់​ល្ខោន​នេះ​ត្រូវ​ប្រឡង​ប្រជែង​ជា​មួយ​ទម្រង់​ដទៃ​ទៀត ដែល​មាន​យ៉ាង​សំបូរ​បែប​នៅ​កម្ពុជា​ភាគ​កណ្ដាល ដូចជា​ល្ខោន​ប្រាមោជទ័យ “១៩២០-១៩៤០” និង​ល្ខោន​មហោរី​ដែល​កើត​មាន​ជា​យូរ​លង់​មក​ហើយ ។ ពិត​មែន​តែ​លើក​ទី១​នេះ ល្ខោន​បាសាក់​បាន​ទទួល​បរាជ័យ ប៉ុន្តែ​ពេល​នោះ​សិល្ប​ករ​ល្ខោន​បាសាក់​បាន​ហាត់​រៀន និង​ស្រូប​យក​នូវ​ចំណេះ​ថ្មីៗ មួយ​ចំនួន​ពី​ទម្រង់​ល្ខោន​នៅ​ភ្នំពេញ ដូចជា​ភ្លេង​មហោរី ឫ​ចម្រៀង​មហោរី​ជា​ដើម មុន​ពេល​ត្រឡប់​ទៅ​ស្រុក​វិញ ។ក្រោយ​ពី​ពេល​ហាត់​វៀន និង​បាន​សម្ដែង​ច្រើន​លើក​ច្រើន​សារ​ដោយ​បញ្ចូល​បច្ចេកទេស​​ថ្មីៗ​មួយ​ចំនួន​ផង ល្ខោន​នេះ បាន​ទទួល​ជោគជ័យ​កាន់​តែ​ធំ​ធេង នៅ​តំបន់​កូសាំងស៊ីន ។ បន្ទាប់​ពី​នោះ​មក​លោក ឆា​គ្រួន ក៏​នាំ​ក្រុម​របស់​គាត់​តាម​ទូក ប៉ុកចាយ ដែល​មាន​គ្រឿង​ប្រដាប់​ដំឡើង​ឆាក និង​សម្ភារៈ​តុបតែង​លំអ​ផ្សេងៗ គឺ​ឆាក​ចល័ត ដែល​ដំឡើង​លើ​គោក​ក៏​បាន ឫ​ដំឡើង​លើ​ទូក​ក៏​បាន ហើយ​នាំ​ក្រុម​សិល្បៈ​នេះ​មក​សម្ដែង​នៅ​រាជ​ធានី​ភ្នំពេញ និង​ខេត្ត​ឯ ទៀត ជា​លើក​ទី២ ។ លើក​នេះ​ល្ខោន លោក ឆា​គ្រួន បាន​ទទួល​ជោគជ័យ​យ៉ាង​ធំធេង ក្នុង​ការ​ប្រកួត​ប្រជែង​ជា​មួយ​ល្ខោន បា្រមោជ្ជទ័យ និង​ល្ខោន​មហោរី​នៅ​ភ្នំពេញ និង​តំបន់​ដទៃ​ទៀត​នៅ​ប្រទេស​កម្ពុជា ពិសេស​គឺ​ខេត្ត​តាម​មាត់​ទន្លេ ។ ល្ខោន​លោក​ ឆា​គ្រួន ​នេះ​ស្រូប​យក​ទស្សនិកជន​យ៉ាង​ច្រើន​គគ្រឹក​គគ្រេង ហើយ​បាន​ធ្វើ​ឲ្យ​ល្ខោន​ប្រា​មោជទ័យ និង​ល្ខោន​មហោរី​ធ្លាក់​ក្នុង​វិបត្តិ​ដ៏​ធ្ងន់ធ្ងរ​បាត់​បង់​ប្រជាប្រិយភាព ហើយ​ចំនួន​ទស្សនិកជន​ចេះ​តែ​ថយ​ចុះ​ជា​លំដាប់ ។ ដោយ​សារ​មធ្យោបាយ​សម្ដែង​ថ្មី​រហ័សរហួន ស្វាហាប់​ ការ​តុបតែង​លំអ​ឆាក​សំលៀក​បំពាក់​ការ​លាប​មុខ ឫ​គូរ​មុខ​ដ៏​ល្អ (កន្លែង​ខ្លះ​ទទួល​ឥទ្ធិពល​ពី​ហ៊ី​ចិន) ទាំង​ល្បិច​ហោះ​ហើរ​ក៏​ប៉ិន​ប្រសប់ ពិសេស​សំនៀង​រដឺន ទាំង​សម្ដី​និយាយ ទាំង​ចម្រៀង​របស់​ខ្មែរ បាសាក់​ស្រទន់​ពីរោះ ហើយ​ពាក្យ​សម្ដី ប្រកប​ដោយ​អត្ថន័យ ខ្លឹម​សារ​ល្អ ព្រោះ​អ្នក​សម្ដែង​ភាគ​ច្រើន​ច្រើន​ជា​អ្នក​មាន​ចំណេះ​ជ្រៅ​ជ្រះ​ខាង​អក្សរសិល្ប៍ និង​សាសនា​ផង ធ្វើ​ឲ្យ​ទស្សនិកជន​នៅ​កម្ពុជា​កណ្ដាល​នេះ​ជក់​ចិត្ត​ដិត​អារម្មណ៍​យ៉ាង​ខ្លាំង រហូត​ដល់​គេ​នាំ​គ្នា​ហៅ ឫ​ឲ្យ​ឈ្មោះ​ទម្រង់​ល្ខោន​នេះ​ថា ជា “ល្ខោន​បាសាក់” ដោយ​យក​ទី​កន្លែង​នៃ​ទម្រង់​សិល្បៈ​នេះ​រីក​ចម្រើន? មក​ដាក់​ឈ្មោះ​ឲ្យ​ទម្រង់​ល្ខោន​នេះ​តែ​ម្ដង ។ គឺ​ចាប់​ពី​ពេល​នោះ​មក​ហើយ ដែល​ល្ខោន​ទ្រើង​ឃ្លោក ឫ យូរ​កេរ្តិ៍​ប្រែ​ឈ្មោះ​ជា ល្ខោន​បាសាក់​ដែល​យើង​ស្គាល់ និង​បាន​ឃើញ​រហូត​ដល់​សព្វ​ថ្ងៃ​នេះ ។",
      worldHeritage:
        "&emsp;ល្ខោនមួយនេះមិនទាន់បានចុះក្នុងបញ្ជីបេតិកភណ្ឌពិភពលោកនៅឡើយទេ។",
      reference: `<ul>
      <li>
        <a
          href="http://www.mcfa.gov.kh/site/detail/28#.XZwkF0YzYuU"
          >http://www.mcfa.gov.kh/site/detail/28#.XZwkF0YzYuU</a
        >
      </li>
      <li>
        <a
          href="https://km.wikipedia.org/wiki/%E1%9E%9B%E1%9F%92%E1%9E%81%E1%9F%84%E1%9E%93%E1%9E%94%E1%9E%B6%E1%9E%9F%E1%9E%B6%E1%9E%80%E1%9F%8B"
          >https://km.wikipedia.org/wiki/%E1%9E%9B%E1%9F%92%E1%9E%81%E1%9F%84%E1%9E%93%E1%9E%94%E1%9E%B6%E1%9E%9F%E1%9E%B6%E1%9E%80%E1%9F%8B</a
        >
      </li>
    </ul>`
    });

    contentArr.push({
      src: `../images/lakhon-sbek--thom__content.jpg`,
      title: "ល្ខោនស្រមោលស្បែកធំ",
      about:
        "&emsp;ល្ខោន​ស្រមោល​ស្បែក​ធំ គឺជា​សិល្បៈ​ខ្មែរ​មួយបែប​មានកំណើត​តាំង​ពីស​.​វ​ទី ១ មកម្ល៉េះ ។ នេះ​ជាការ​បញ្ជាក់​អំពី​សតិ​ប្រាជ្ញា​ដ៏​ភ្លឺស្វាង និង​គំនិត​ច្នៃប្រឌិត​ដ៏​កំពូល ដែល​បង្កើត​សិល្បៈ​នេះ​ឡើង ឲ្យ​ក្លាយទៅជា​ទស្សនីយភាព​មួយ​ដ៏​អស្ចារ្យ ។ គេ​អាច​និយាយបានថា ល្ខោន​ស្រមោល​ស្បែក​ខាងលើនេះ គឺជា​សិល្បៈ​មួយ​ដែល​ប្រមូលផ្តុំ​នូវ​សិល្បៈ​ទាំង ៧ ។ ហេតុនេះហើយ​ទើប​សក្ខីកម្ម​នៃ​ល្ខោនស្បែក​នេះ ដែល​គេ​ហៅថា ល្ខោន​អាយ៉ង ត្រូវបាន​កត់ត្រា​ទុក​ក្នុង​ឯកសារ​មួយចំនួន​នា​សម័យ​ក្រោយ​អង្គរ ។​​គេ​ឃើញ​មានការ​សម្តែង​នូវ​ល្ខោនស្បែក​ធំ​នេះ ក្នុង​ពិធីបុណ្យ​ធំៗ ជាពិសេស​នៅ​ខេត្តសៀមរាប​អង្គរ ដូច​ជាការ​បួងសួង​សុំ​សេចក្តីប្រាថ្នា​អ្វីមួយ ពិធី​បុណ្យសព​ព្រះចៅអធិការ​វត្ត​ដែល​សុគត ពិធីបុណ្យ​សុំ​ទឹកភ្លៀង បុណ្យ​ចំរើន​ព្រះ​ជន្មាយុ​របស់​ព្រះមហាក្សត្រ ដោយមាន​មហាជន​ច្រើន​កុះករ​ចូលរួម ។ ",
      history:
        "&emsp;ក្រោយ​សតវត្ស​ទី​១៣ ជនជាតិ​ជិតខាង​ខ្លះ​បាន​យល់ច្រឡំ​ថា សិល្បៈ​ស្បែក​ខ្មែរ​ដែល​ប្រជាជន​ខេត្តបាត់ដំបង​តែង​ហៅថា ’​ណាំងស្បែក​” នោះ​គឺ មានកំណើត​ចេញពី​ប្រទេស​ថៃ ។ ដូច​ករណី​នៃ​ល្ខោន​របាំ​ព្រះរាជ​ទ្រព្យ​ខ្មែរដែរ ការ​ស្រាវ​ជ្រាវរបស់​យើង ដើម្បី​ឲ្យ​ដឹងថា សិល្បៈ​ស្បែក​ខ្មែរ​មាន​ប្រភព​ចេញពី​ពេលណា​មក បានធ្វើ​ឲ្យ​មាន​ដំណោះស្រាយ​ជ្រះស្រឡះ​មួយ ។ សិល្បៈ​ស្បែក​ខ្មែរ​នេះ ត្រូវបាន​នាំចូល​ពី​ឥណ្ឌា​នៅ​ដើម​សតវត្ស​ទី​១ នៃ​គ្រិស្តសករាជ ពោលគឺ​សិល្បៈ​ស្បែក​មានកំណើត​ចេញពី​​ប្រទេស​ឥណ្ឌា​ភាគខាងត្បូង ។ កេរ្តិ៍មរតក​សិល្បៈ​ស្បែក​ខ្មែរ​នេះ មាន​អាយុកាល​ប្រមាណ​២០០០​ឆ្នាំ​មកហើយ ដែល​សូម្បីតែ​ជនជាតិខ្មែរ​ខ្លួនឯង ក៏​សឹងតែ​ពុំបាន​ដឹង​ច្បាស់​នាពេល​កន្លងមក​ផង ដោយសារតែ​ខ្វះ​ឯកសារ ។ឯ​ជនជាតិ​ប្រទេសជិតខាង​ខ្លះ​ក៏បាន​លើកយក​មរតក​សិល្បៈ​ខ្មែរ​នេះ ថា​ជា​របស់​ជាតិ​សាសន៍​របស់ខ្លួន​ក៏មាន​ដូចជា​ជនជាតិ​ថៃ ឬ​ជនជាតិ​ម៉ា​ឡេ​ជាដើម ។ តែ​ទោះ​យ៉ាងណាក៏ដោយ​ការស្រាវជ្រាវ​នាពេល​ក្រោយៗ​នេះ បន្ទាប់ពី​ស្រុកទេស​បានបញ្ចប់​សង្គ្រាម​ដ៏​រ៉ាំរ៉ៃ​ទៅ ទើប​បានដឹង​ច្បាស់​ថែម​ទៀតថា សិល្បៈ​ស្បែក​ខ្មែរ​មានកំណើត​នា​ដើម​សតវត្ស​ទី​១ ដែលមាន​លំហូរ​ចូល​ពី​ប្រភព​ប្រទេស​ឥណ្ឌា​មក ។ ​សិល្បៈ​ស្បែក​នេះ​ដំបូង​ឡើយ មាននៅ​ប្រទេស​ឥណ្ឌា​ភាគខាងត្បូង ដែលជា​សិល្បៈ​ធ្វើឡើង​សម្រាប់​ជា​តង្វាយ​ដល់​ព្រះអាទិទេព​ដ៏​មាន​ មហិទ្ធិឫទ្ធិ​របស់​ឥណ្ឌា ។ តង្វាយ​សិល្បៈ​ស្បែក​នេះ ជាការ​បួងសួង​សុំ​សេចក្តីសុខ​ចម្រើន និង​សិរី​មង្គល​សម្រាប់​ប្រជាជន​ឥណ្ឌា ។​ការកកើតឡើង​នូវ​សិល្បៈ​ស្បែក​នេះ លើទឹក​នៃ​ព្រះរាជាណាចក្រ​កម្ពុជា​ដំបូង​បំផុត​ដោយ​ឥណ្ឌា​រូបនីយកម្ម​នា​ដើម​ សតវត្ស​ទី​១ នៃ​គ្រិស្តសករាជ ។ ក្នុងពេល​មាន​លំហូរ​ចូល​សិល្បៈ​ស្បែក​បែបនេះ​មក​ក្នុងប្រទេស​ខ្មែរ នៅឯ​ប្រទេស​ឥណ្ឌា​មាន​សិល្បៈ​ស្បែក​នេះ​ពាសពេញ ដូចជា​ស្រុក​ប៉ី​ជ​បូរ​, បៃ​លា​រី​, ជិ​ត្រ​ទូ​គ៌ា​, រី​ង្គា​ឡ័​រ​មី​ស័​រ​, ស្សី​ភេ​គ​, ម័​ង​ឌី​យ៉ា​, ទុប​កូរ និង​ស្រុក​នាតកា​ដែល​សិល្បៈ​ស្បែក​នេះ​មាន​លក្ខណៈ​ស្រដៀង​ដូច​សិល្បៈ​ស្បែក​ ខ្មែរ​បច្ចុប្បន្ន​នេះដែរ ។​​សូម​ជម្រាប​បន្ថែមថា ភាពស្រដៀងគ្នា​រវាង​សិល្បៈ​ស្បែក​ខ្មែរ និង​ឥណ្ឌា​នេះ​ជាការ​បញ្ជាក់ថា សិល្បៈ​ស្បែក​ទាំងពីរ​នេះ សុទ្ធ​តែមាន​ភាពចំណាស់​នៃ​ប្រវត្តិ​របស់​វា​នៅក្នុង​ប្រទេស​នីមួយៗ​យ៉ាងពិត​ ប្រាកដ  ហើយ​សិល្បៈ​ស្បែក​នេះ​ក៏​នៅតែ​បន្ត​ថែរក្សា​រហូតមកដល់​ប​ច្ចុ​ប្បន្ន​នេះ​ ទៀត ក្រោយពី​បាន​ជះឥទ្ធិពល​លើ​ណាំង​ថៃ​នា​សម័យ​សុខោទ័យ និង​អាយុ​ធ្យា ។​​ជារួម​ដូច​ប្រទេស​ឥណ្ឌូនេស៊ី និង ម៉ាឡេស៊ីដែរ សិ​ល្បៈ​ស្បែក​ខ្មែរ ពិត​ជាមាន​ប្រភព​ចេញពី​ឥណ្ឌា​យ៉ាង​ប្រាកដ ៕",
      worldHeritage:
        "&emsp;ល្ខោនស្រមោលស្បែកធំបានចូលឈ្មោះនៅក្នុងបញ្ជីសម្បត្តិបេតិកភណ្ឌពិភពលោកផ្នែកអរូបីយ៍ នៅថ្ងៃទី ២៥ ខែវិច្ឆិកា ឆ្នាំ ២០០៥។",
      reference: `<ul>
      <li>
        <a
          href="http://www.mcfa.gov.kh/site/detail/32#.XZw44EYzYuU"
          >http://www.mcfa.gov.kh/site/detail/32#.XZw44EYzYuU</a
        >
      </li>
      <li>
      <a
        href="http://kleykley.sabay.com.kh/article/1106469"
        >http://kleykley.sabay.com.kh/article/1106469</a
      >
    </li>
    </ul>`
    });

    contentArr.push({
      src: `../images/lakhon-sbek--touch__content.jpg`,
      title: "ល្ខោនស្រមោលស្បែកតូច",
      about:
        "&emsp;តាម​ឯក​សារ​ទស្សនីយ​ភាព​ខ្មែរ​ លើក​ឡើង​ថា​ ស្បែក​តូច​ ជា​ប្រភេទ​សិល្បៈ​ដែល​ស្ថិត​ក្នុង​ក្រុម​ល្ខោន​ស្រមោល​ដូច​ស្បែក​ធំ​ដែរ​ ប៉ុន្តែ​ជា​ចម្លាក់​ដែល​ឆ្លាក់​នៅ​លើ​ស្បែក​គោ​ មាន​ទំហំ​ តូចៗ​ ហើយ​មិន​មែន​ជា​ចម្លាក់​នឹង​ថ្កល់​ដូច​សិល្បៈ​ស្បែក​ធំ​ ឬ​ស្បែក​លាប​ពណ៌​ឡើយ​ ។​ ផ្ទុយ​ទៅ​វិញ​ វា​ជា​ចម្លាក់​ដែល​ធ្វើ​ចលនា​កម្រើក​បាន​ ដូច​ជា​លើក​ដៃ​ លើក​ជើង​ ឬ​ក៏​ហា​មាត់​និយាយ​ និង​ច្រៀង​បាន​​ ។​ ម្យ៉ាង​ទៀត​សិល្បៈ​ស្បែក​ធំ​ ជា​ប្រភេទ​សិល្បៈ​សក្ការៈ​ ដែល​សម្តែង​មាន​លក្ខណៈ​ហ្មត់​ចត់​ ស្រគត់​ស្រគំ​ សម្តែង​រឿង​សាសនា​ (សម្តែង​តែ​រឿង​រាម​កេរ្តិ៍​មួយ​គត់)​ ។​ចំណែក​ស្បែក​តូច​វិញ​ ជា​ប្រភេទ​សិល្បៈ​ប្រជា​ប្រិយ​ មាន​លក្ខណៈ​កំប្លុក​កំប្លែង​ងាយ​មើល​ ងាយ​យល់​ ហើយ​ព្រម​ទាំង​អាច​សម្តែង​រឿង​ជា​ច្រើន​ ដូច​ជា​រឿង​ព្រេង​និទាន​ រឿង​ប្រវត្តិ​សាស្ត្រ​ ឬ​រឿង​ទាក់​ទង​នឹង​បច្ចុប្បន្ន​ភាព​របស់​សង្គម​ទៀត​ផង​ ។​នៅ​ប្រទេស​កម្ពុជា​ មាន​ពាក្យ​បី​ម៉ាត់​សម្រាប់​សម្គាល់​ ឬ​ក៏​ដាក់​ឱ្យ​ជា​ឈ្មោះ​ដល់​ទម្រង់​សិល្បៈ​នេះ​ គឺ​ ១-​ស្បែក​តូច​ ២-​អាយ៉ង​ ៣-​ណាំង​តាលុង​ ឬ​ណាំង​កាលុង​ ទៅ​តាម​ការ​និយម​របស់​តំបន់​ នីមួយៗ​ខុស​គ្នា​ ។​ ម្យ៉ាង​ទៀត​ បើ​ពឹង​ផ្អែក​ទៅ​លើ​ការ​និយម​របស់​ជន​ជាតិ​ខ្មែរ​ដែល​យល់​ថា​ ពាក្យ​តុក្កតា​ និង​ពាក្យ​អាយ៉ង​ មាន​ន័យ​ដូច​គ្នា​ គឺ​សម្រាប់​សម្គាល់​វត្ថុ​ឥត​វិញ្ញាណ​ទាំង​ឡាយ​ ទោះ​បី​មាន​ទំហំ​មាឌ​ ឬ​ក៏​សំប៉ែត​ ដូច​ជា​រូប​ចម្លាក់​ធ្វើ​អំពី​ឈើ​ អំពី​កំណាត់​ញាត់​សំឡី​ រូប​ចម្លាក់​ធ្វើ​ពី​ដី​ឥដ្ឋ​ រូប​ចម្លាក់​ធ្វើ​អំពី​ស្បែក​ ហើយ​សព្វ​ថ្ងៃ​មាន​ធ្វើ​ពី​ក្រដាស​ និង​ជ័រ​ប្លាស្ទិក​ទៀត​ផង​ ហើយ​វត្ថុ​ទាំង​នេះ​ត្រូវ​ជើត​ ឬ​ញាក់​ ឬ​ជំរុញ​ឱ្យ​ធ្វើ​សកម្ម​ភាព​ដោយ​អ្នក​ដទៃ​ «សិល្ប​ករ​អ្នក​ជើត» នោះ​អ្នក​ស្រាវ​ជ្រាវ​ជឿ​ថា​ សិល្បៈ​ប្រភេទ​នេះ​ប្រាកដ​ជា​មាន​ចំណាស់​ច្រើន​សតវត្ស​ណាស់​មក​ហើយ​នៅ​លើ​ទឹក​ដី​កម្ពុជា​ ។",
      history:
        "&emsp;ចំពោះ​កាល​បរិច្ឆេទ​កំណើត​ ឬ​ប្រភព​របស់​សិល្បៈ​ស្បែក​តូច​ ឬ​អាយ៉ង​នេះ​វិញ​ អ្នក​ស្រាវ​ជ្រាវ​បាន​ជួប​ប្រទះ​ឯក​សារ​ជា​ច្រើន​ ដែល​អស់​លោក​អ្នក​ប្រាជ្ញ​រាជ​បណ្ឌិត​ទាំង​ជន​ជាតិ​កម្ពុជា​ ទាំង​បរទេស​បាន​បន្សល់​ទុក​ឱ្យ​ដោយ​មតិ​ខ្លះ​ប៉ាន់​ស្មាន​ថា​ ស្បែក​តូច​ ឬ​អាយ៉ង​ខ្មែរ​ ប្រហែល​ជា​បាន​យោន​យក​កំណើត​មក​ពី​ Wayang ម៉ាឡេសុី​ ?​ ឯ​មតិ​ខ្លះ​ទៀត​បាន​សន្និ​ដ្ឋាន​ថា​ អាយ៉ង​ខ្មែរ​ប្រហែល​ជា​មាន​ដើម​កំណើត​នៅ​ភូមិ​ម៉ាល់​យ៉ង់​ ទឹក​ដី​ភាគខាង​លិច​ខេត្ត​បាត់​ដំបង​ ។​ ខ្លះ​មាន​យោបល់​ថា​ អាយ៉ង​ប្រហែល​មាន​ដើម​កំណើត​នៅ​ម្តុំ​ខ្ពប​តាយ៉ង​ គឺ​វត្ត​បទុម​វតី​ រាជ​ធានី​ភ្នំពេញ​ តាំង​ពី​យូរ​លង់​ណាស់​មក​ហើយ​ ដោយ​សំអាង​ទៅ​លើ​ការ​សិក្សា​ស្រាវ​ជ្រាវ​ពី​ឈ្មោះ​អាយ៉ង​នេះ​ ដែល​សម្គាល់​ដល់​តួ​អង្គ​ត្លុក​ដ៏​ល្បី​ល្បាញ​របស់​ទម្រង់​សិល្បៈ​នេះ​នៅ​ភ្នំពេញ​ ហើយ​ដែល​ប្រជា​ជន​ទូទាំង​ប្រទេស​មាន​ការ​និយម​រាប់​អាន​ ។​ ឯ​តំបន់​ដទៃ​ទៀត​ដែល​មាន​ស្បែក​តូច​ដែរ​ ប៉ុន្តែ​គ្មាន​ត្លុក​ឈ្មោះ​អាយ៉ង​ដូច្នេះ​ទេ​ ?​ និង​មាន​មតិ​ខ្លះ​ទៀត​បាន​ផ្តោត​ទៅ​លើ​ភូមិ​កំពង់​ត្រយង ស្ថិត​ក្នុង​ឃុំ​ពួក​ ស្រុក​ពួក​ ខេត្ត​សៀម​រាប​ ដែល​ស្ថិត​មិន​ឆ្ងាយ​ប៉ុន្មាន​ពី​ទីក្រុង​អង្គរ​ ហើយ​ដែល​មាន​ទំនៀម​ផលិត​ និង​សម្តែង​តុក្កតា​ធ្វើ​អំពី​ឈើ​…តាំង​ពី​យូរ​លង់​ណាស់​មក​ហើយ​ផង​ ។​រីឯ​ចំណុច​មួយ​ដ៏​សំខាន់​ទៀត​ដែល​ទាក់​ទង​ដល់​ដើម​កំណើត​តុក្កតា​ ឬ​អាយ៉ង​នោះ​ គឺ​ការ​សិក្សា​សិលា​ចារឹក​ខ្មែរ​របស់​អ្នក​ស្រី​ពៅ​ សាវ​រស់​ ដែល​បាន​បញ្ជាក់​ឱ្យ​ដឹង​ថា​ នៅ​ក្នុង​សិលា​ចារឹក​មុន​សម័យ​អង្គរ​លេខ​ K-155 មាន​ចែង​អំពី​សិល្ប​ការិនី​សម្តែង​តុក្កតា​ (KU TUKTAR) ក្នុង​ពិធី​បូជា​ថ្វាយ​ចំពោះ​ព្រះ​អាទិ​ទេព​ «សរស្វតិ» ដែល​ជា​អាទិទេព​តំណាង​ឱ្យ​សំនួន​វោហារ​ដ៏​ពីរោះ​ និង​សិល្បៈ​ ។​ នេះ​ជា​ភស្តុ​តាង​ដែល​ធ្វើ​ឱ្យ​អ្នក​ស្រាវ​ជ្រាវ​ដឹង​ថា​ ទម្រង់​សិល្បៈ​នេះ​មាន​កំណើត​តាំង​ពី​មុន​សម័យ​កសាង​ប្រាសាទ​អង្គរ​ម៉្លេះ​ ។​សៀវ​ភៅ​ទស្សនីយ​ភាព​ខ្មែរ​បញ្ជាក់​ថា​ ដោយ​ឡែក​អ្នក​ចង​ក្រង​ឯក​សារ​ទទួល​បាន​ព័ត៌​មាន​ ឬ​ក៏​ឯក​សារ​ដ៏​មាន​​សារ​សំខាន់​មួយ​ទៀត​ដែល​ទាក់​ទង​នឹង​សិល្បៈ​ល្ខោន​ស្រមោល​ស្បែក​តូច​ នៅ​កម្ពុជា​គឺ​នៅ​ឆ្នាំ​២០០០​ លោក​ Hamzah Awang Amat ជា​សាស្ត្រា​ចារ្យ​អ្នក​ដឹក​នាំ​សិល្បៈ​ល្ខោន​ស្រមោល​ wayang Kulit ដ៏​ល្បី​ល្បាញ​របស់​ប្រទេស​ម៉ាឡេសុី​ បាន​ទទួល​ពាន​រង្វាន់​ជ័យ​លាភី​សិល្បៈ​ និង​វប្បធម៌​ របស់ «The Fokuoka Asian Culture prize 2000” ។​ នៅ​ក្នុង​អត្ថបទ​របស់​លោក​ បាន​បញ្ជាក់​ថា​ «ល្ខោន​ស្រមោល​ Wayang Kulit ខេត្ត​កេឡាន់​តាន់​ ក្នុង​ប្រទេស​ម៉ាឡេសុី​ មាន​ប្រភព​នៅ​ក្នុង​ប្រទេស​កម្ពុជា​ ហើយ​បាន​ហូរ​ចូល​ទៅ​ជ្រោយ​ម៉ាឡេ​​ តាម​ប្រទេស​ថៃ​ ភាគ​ខាង​ត្បូង​» ។​ចំណុច​មួយ​សំខាន់​ទៀត​នៅ​ប្រទេស​កម្ពុជា​ រហូត​ដល់​សព្វ​ថ្ងៃ​នេះ​ គេ​សង្កេត​ឃើញ​មាន​ក្រុម​សិល្បៈ​ស្បែក​តូច​ ឬ​អាយ៉ង​ មាន​វត្ត​មាន​នៅ​ច្រើន​ខេត្ត​-ក្រុង​ ក្នុង​ផ្ទៃ​ប្រទេស​ទាំង​មូល​ ដូច​ជា​នៅ​ខេត្ត​សៀម​រាប​ (មាន​ស្បែក​តូច​ច្រើន​វង់)​ នៅ​ខេត្ត​បន្ទាយ​មាន​ជ័យ​ នៅ​ខេត្ត​បាត់​ដំបង​ និង​នៅ​រាជ​ធានី​ភ្នំពេញ​ (ក៏​មាន​ច្រើន​វង់​ដែរ)​ ។​ ចំណែក​ខាង​វង់​តន្ត្រី​ជូន​ស្បែក​តូច​ទាំង​អស់​នោះ​វិញ​ មាន​លក្ខណៈ​មិន​ដូច​គ្នា​ទាំង​អស់​ទេ ពោល​គឺ​វង់​ស្បែក​តូច​នៅ​ខេត្ត​សៀម​រាប​ និង​វង់​ស្បែក​តូច​នៅ​ភ្នំពេញ​ ប្រើ​វង់​ភ្លេង​ពិណ​ពាទ្យ​សម្រាប់​ជូន​ការ​សម្តែង​ ហើយ​ភាគ​ច្រើន​ជា​ភ្លេង​ពិណ​ពាទ្យ​វង់​តូច​ ដែល​មាន​ឧបករណ៍​ប្រាំ​មុខ​ គឺ​រនាត​ឯក​ គង​វង់ធំ​ ស្រឡៃ​ សម្ភោរ និង​ស្គរ​ធំ​ ។​ ឯ​បទ​ភ្លេង​វិញ​ គឺ​ភាគ​ច្រើន​ខ្ចី​ពី​វង់​ភ្លេង​មហោរី​ ។​ដោយ​ឡែក​ក្រុម​ស្បែក​តូច​ នៅ​ខេត្ត​បាត់​ដំបង​វិញ​ គេ​មិន​ប្រើ​វង់​ភ្លេង​ពិណ​ពាទ្យ​ទេ​ ។​ ផ្ទុយ​ទៅ​វិញ​សម្រាប់​ជូន​សិល្បៈ​ស្បែក​តូច​ ឬ​អាយ៉ង​នេះ​ អ្នក​បាត់​ដំបង​ ប្រើ​វង់​ភ្លេង​មួយ​វង់​ដែល​មាន​ឧបករណ៍​ ១-​ស្គរ​តូច​មួយ​ (រាង​ដូច​ស្គរ​ធំ​ ភ្លេង​ពិណ​ពាទ្យ​ វាយ​ដោយ​អន្លូង​ តូចៗ​មួយ​គូ)​, ២-​ស្គរ​ដៃ​មួយ​គូ​ (ស្គរ​អារក្ស)​, ៣-​ស្រឡៃ​តូច​មួយ​, ៤-​គង​ដោះ​តូច​មួយ​ (គង​ម៉ង់)​ និង​៥-​ពេល​ខ្លះ​មាន​ក្រាប់​កំណាត់​ដើម​ឫស្សី​ផង​ ៕​",
      worldHeritage:
        "&emsp;ល្ខោនមួយនេះមិនទាន់បានចុះក្នុងបញ្ជីបេតិកភណ្ឌពិភពលោកនៅឡើយទេ។",
      reference: `<ul>
      <li>
        <a
          href="https://km.wikipedia.org/wiki/%E1%9E%9B%E1%9F%92%E1%9E%81%E1%9F%84%E1%9E%93%E1%9E%9F%E1%9F%92%E1%9E%94%E1%9F%82%E1%9E%80%E1%9E%8F%E1%9E%BC%E1%9E%85"
          >https://km.wikipedia.org/wiki/%E1%9E%9B%E1%9F%92%E1%9E%81%E1%9F%84%E1%9E%93%E1%9E%9F%E1%9F%92%E1%9E%94%E1%9F%82%E1%9E%80%E1%9E%8F%E1%9E%BC%E1%9E%85</a
        >
      </li>
      <li>
      <a
        href="https://kohsantepheapdaily.com.kh/article/94783.html"
        >https://kohsantepheapdaily.com.kh/article/94783.html</a
      >
    </li>
    </ul>`
    });

    contentArr.push({
      src: `../images/lakhon-mohory__content.jpg`,
      title: "ល្ខោនមហោរី",
      about:
        "&emsp;ល្ខោនមហោរី គឹជាសិល្បៈចំណាស់ និងជាទម្រង់នៃរបាំ ដែលបានបង្កើតនៅក្នុងឆ្នាំ១៩៦០ ដោយ ផ្អែកទៅលើចម្រៀងមហោរីការរាំ និងការនិយាយគ្នា។ ពាក្យមហោរី ក្លាយមកពីពាក្យ មនោហារី ឬ មនោហរា ខណៈពេលវាលេចចេញពីអក្សរចារឹកនៅលើសិលាបុរាណ។ ការរាំ និងចំរៀងមហោរី ធ្វើឲ្យមានការលំហែ ការសម្ដែង និងកាយវិការវា ប្រហាក់ប្រហែលនឹងរបាំប្រជាប្រិយផងដែរ។ ល្ខោននេះត្រូវបានសម្ដែងដោយការបន្ទរតាមភ្លេងមហោរី។ វាត្រូវ បានណែនាំឲ្យស្គាលដោយសាស្រ្តាចារ្យ ពេជ្រទុំក្រវិល ក្នុងឆាំ្ន១៩៦៧។​​ ល្ខោនមហោរីគឺជាទម្រង់ល្ខោនច្រៀងរាំបែបបុរាណនៅប្រទេសកម្ពុជា។ ពាក្យមហោរីនេះ គឺជាឈ្មោះវង់តន្រ្ដីមួួយរបស់ជនជាតិខ្មែរយើងដែលជាប្រភេទតន្ត្រីសម្លេងស្រាល សម្រាប់ប្រគុំកំដរបរិយាកាសសប្បាយរីករាយក្នុងពិធីជួបជុំកម្សាន្ដនានា មានពិធីជប់លៀង ឬពិធីបុណ្យតាមគ្រួសារ ពិធីបុណ្យក្នុងភូមិ ឬឪកាសលំហែពីការងារជាដើម។ ចំណែកខាងល្ខោនមហោរីវិញ ដែរលជាទម្រង់ល្ខោនមួយបែបដែលមានសិល្បករចម្រុះប្រុសស្រី រាំផងច្រៀងផង និយាយផង ក្នុងពេលសម្ដែង និងដោយសារទម្រង់នេះពឹងផ្អែកទាំងស្រុងលើវង់តន្ដ្រីមហោរី ពោលគឺយកវង់តន្រ្ដី និងចម្រៀងមហោរីរាប់រយបទ ជាមធ្យោបាយគ្រឹះរបស់ខ្លួនក្នុងការសម្ដែងនោះ ទើបទស្សនិកជន ហៅឈ្មោះនេះថា ល្ខោនមហោរីជារៀងរហូតមក។",
      history: `&emsp;បើតាមប្រសាសន៍គ្រូល្ខោនចាស់ៗ បានពោលថា៖ ល្ខោនមហោរីនេះ មានកំណើតតាំងពីច្រើនទសវត្សមកហើយដែរ ប៉ុន្ដែទម្រង់នេះក៏ដូចជាទម្រង់សិល្បៈដទៃទៀត បានជួបវិបត្ដិរុះរោយ ចុះទៅតាមដំណើរវិវឌ្ឍដ៏ពិបាកនៃប្រវត្តិសាស្រ្ដកម្ពុជាក្នុងដំណាក់កាលខ្លះ។ ដោយឡែកចាប់ពីអំឡុងឆ្នាំ១៩២៩ ឬ១៩៣០ មកល្ខោនមហោរីក៏ដូចជាទម្រង់សិល្បៈផ្សេងទៀតដែលមាននៅតាមរោងនានា នៅរាជធានីភ្នំពេញក៏បានជួបវិបត្តិជាបន្ដបន្ទាប់។ ដោយក្នុងកាលៈទេសៈនោះ ល្ខោនមហោរី និងល្ខោនបាសាក់ ដែលមានកំណើតមកពីកម្ពុជាក្រោម ដែលទទួលបានជោគជ័យធំធេងក្នុងជីវិតរបស់ខ្លួនដោយបានទាក់ទាញទឹកចិត្តទស្សនិកជន ឲ្យមកទស្សនាកាន់តែច្រើនរហូតមក។ ក្នុងគ្រោះវិបត្ដិនេះ ពីមួយថ្ងៃទៅមួយថ្ងៃ ទម្រង់សិល្បៈល្ខោនមហោរីកាន់តែសាបរលាបទៅៗរហូតស្ទើរបាត់រូបតែម្ដង់។<p class="para">ប៉ុន្តែរហូតមកដល់ឆ្នាំ១៩៦៥-៦៦ ពេលដែលសាកលវិទ្យាល័យភូមិន្ទវិចិត្រសិល្បៈបានកើតឡើង នៅក្នុងពិធីជប់លៀងមួយក្នុងបរិវេនសកល លោកសាស្រ្ដាចារ្យ មាស គក លោកសាស្រ្ដាចារ្យ ឆេង ផុន លោកសាស្រ្ដាចារ្យ ប៉ុល សំអឿន ដែលសុទ្ធជាសាស្រ្ដាចារ្យខាងវីជ្ជាល្ខោន បានលើកយកអន្លើមួយនៃរឿងថ្មរាំ ដែលនិពន្ធដោយ សាស្រ្ដាចារ្យ ហង់ ធនហាក់ មករៀបរៀងជាល្ខោនមហោរី ហើយដែលកាលនោះ សំដែងដោយលោក ឈន ទត (ពេជ្រ ទុំក្រវុិល) និងអ្នកស្រី អ៊ុំ មន្ថោ។</p><p class="para"> គេសង្កេតឃើញមានទម្រង់ល្ខោនមហោរីនេះ រហូតដល់រយៈកាលសង្គ្រាមសុីវិលដ៏កាចសាហាវនាឆ្នាំ១៩៧០ បានចាប់ផ្ដើមឡើង ឬក្រោយនោះបន្តិចផងនៅរាជធានីភ្នំពេញ។ ឥឡូវនេះវិញគេបានជួបប្រទះ ឬទស្សនាទម្រង់ល្ខោនមហោរីនេះដោយកម្រ ពោលគឺទម្រង់ល្ខោនមហោរីនេះ ក៏កំពុងតែត្រូវគំរាបគំហែង ធ្វើដំណើរទៅរកផ្លូវបាត់បង់៕</p>`,
      worldHeritage:
        "&emsp;ល្ខោនមួយនេះមិនទាន់បានចុះក្នុងបញ្ជីបេតិកភណ្ឌពិភពលោកនៅឡើយទេ។",
      reference: `<ul>
      <li>
        <a
          href="https://km.wikipedia.org/wiki/%E1%9E%9B%E1%9F%92%E1%9E%81%E1%9F%84%E1%9E%93%E1%9E%9F%E1%9F%92%E1%9E%94%E1%9F%82%E1%9E%80%E1%9E%8F%E1%9E%BC%E1%9E%85"
          >https://km.wikipedia.org/wiki/%E1%9E%9B%E1%9F%92%E1%9E%81%E1%9F%84%E1%9E%93%E1%9E%9F%E1%9F%92%E1%9E%94%E1%9F%82%E1%9E%80%E1%9E%8F%E1%9E%BC%E1%9E%85</a
        >
      </li>
      <li>
      <a
        href="https://kohsantepheapdaily.com.kh/article/94783.html"
        >https://kohsantepheapdaily.com.kh/article/94783.html</a
      >
    </li>
    </ul>`
    });

    contentArr.push({
      src: `../images/lakhon-Yi--ke__content.jpg`,
      title: " ល្ខោនយីកេ",
      about:
        "&emsp; យីកេ គឺជា ទម្រង់នៃប្រភេទ តន្រ្តីផង ល្ខោនផង ព្រមទាំង ជា របាំផងដែលមាននៅក្នុងសិល្បៈខ្មែរយើងយូរយារណាស់មក ហើយ។តាមវចនានុក្រមខ្មែរដោយសម្ដេចព្រះសង្ឃរាជ ជួន ណាត បានពន្យល់ថា យីកេ គឺជាឈ្មោះល្បែងមហោស្រពមួយប្រភេទ លេងស្រដៀងនឹងល្ខោន តែមានទះស្គរតូចខ្លះ ធំខ្លះបញ្ចើចជាមួយនឹងការច្រៀងរាំ។",
      history: `&emsp; យោងតាមសៀវភៅរបាំប្រជាប្រិយខ្មែរបោះពុម្ពដោយពុទ្ធសាសនបណ្ឌិត្យឆ្នាំ១៩៦៤ ហើយបានចងក្រងដោយ ក្រុមជំនុំទំនើមទម្លាប់ខ្មែរបានឲ្យដឹងថា របាំនេះមានប្រភពកំណើតមកពីជ្វា(JAVA)នៅក្នុងប្រទេសឥណ្ឌូនេស៊ី។តាមការសង្កេតរបស់យើងដោយស្ទង់តាមបទ បែប សម្លៀកបំពាក់ដែលនៅសល់ខ្លះៗដែរ ដូចយ៉ាងតួប្រុសស្លៀកខោ ហើយមានអៀមពីមុខ ស្លៀកសំពត់ខើចត្រឹមភ្លៅពីខាងក្រៅខោ នេះជាដើមក៏ឃើញថាសមដែរ។ឯពត៌មានអ្នកស្រាវ ជ្រាវច្រើនទៀតក៏ប្រាប់ថា របាំនេះមានដើមកំណើតមកពិជ្វា ឬមកពីម៉ាឡាយូ ដែលជាអ្នកកាន់ សាសនាឥស្លាម ដែរ ថែមទាំងមានការរៀបរាប់ ពីរបាំនៅស្រុកជ្វាក៏មានសណ្ឋានដូចយីកេ នេះទៀត។ប៉ុន្តែឯកសារទាំងនេះសុទ្ធតែពុំមានពន្យល់ថា តើឆ្លងមកពីជ្វា ម៉ាឡាយូ តាមរយៈនរណាក្នុងសម័យណាប្រាកដឡើយ។<p class=”para”>ដូច្នេះពត៌មាននេះមាននៅតែពុំបានភ្លឺច្បាស់នៅឡើយដែរ នាំឲ្យអ្នកស្រាវជ្រាវជាបន្តៗទៅទៀតមានការ ដេញដោលរកពត៌មានបន្ថែម ឲ្យច្បាស់។
ដូច្នេះ តាមការសង្កេត ដោយផ្ទូផ្ទឹមឯកសារទាំងអស់ទៅឃើញសេចក្ដីសន្និដ្ឋានថា របាំនេះពិតជាមានកំណើតមកពីជ្វា ឬម៉ាឡាយូមែន តែ យើងក៏ជឿថាលុះរបាំនេះចូលមកនៅ ស្រុកខ្មែរ ខ្មែរយើងបានច្នៃរចនាបញ្ចូលថែមនូវបែបបទសិល្បៈរបស់ខ្លួននៅក្នុងនោះយ៉ាងច្រើន ទៀត។មិនតែប៉ុណ្ណោះសោត នៅគ្រាដែលសៀមប្រមូលយកក្បួនខ្នាតវប្បធម៌យើងទៅបំប៉ន ស្រុកគេ របាំយីកេនេះក៏ទៅជាមួយដែរ។ហេតុនេះហើយបានជាយីកេសព្វថ្ងៃមានជាប់ពាក្យខ្លះ ក្នុង ឡាំ ជាសម្ដីសៀម លាយជាមួយសម្ដីជ្វា ឬ ម៉ាឡាយូផង។</p> `,
      worldHeritage:
        "&emsp;ល្ខោនមួយនេះមិនទាន់បានចុះក្នុងបញ្ជីបេតិកភណ្ឌពិភពលោកនៅឡើយទេ។",
      reference: `<ul>
      <li>
        <a
          href=" https://web.facebook.com/nywatthanakKH2/photos/អំពីទម្រង់និង-ប្រវត្តិសិល្បៈយីកេ-យើងប្រើពាក្យថាទម្រង់សិល្បៈយីកេដូចនេះមានន័យថា-យី/1203556923115671 "
          > https://web.facebook.com/nywatthanakKH2/photos/អំពីទម្រង់និង-ប្រវត្តិសិល្បៈយីកេ-យើងប្រើពាក្យថាទម្រង់សិល្បៈយីកេដូចនេះមានន័យថា-យី/1203556923115671 </a
      <li>
    </ul>`
    });

    contentArr.push({
      src: `../images/lakhon-Pol--Srey__content.jpg`,
      title: " ល្ខោនពោលស្រី ",
      about:
        "&emsp; ល្ខោនពោលស្រីជាកូនបង្កើតល្ខោនព្រះរាជទ្រព្យ ល្ខោនពោលស្រី គឺជាទម្រង់ល្ខោនច្រៀងរាំបុរាណមួយដែលមានលក្ខណៈស្រដៀងគ្នានឹងសិល្បៈល្ខោនក្បាច់បុរាណដែរ ទាំងតន្ត្រីប្រគំជូនល្ខោន ទាំងសម្លៀកបំពាក់សំពត់ អាវស្បៃ មកុដ ក្បាំង ប្រដាប់ដៃជើង និងអ្នកសម្តែង គឺសុទ្ធតែស្រីទាំងអស់ សូម្បីតែតួអង្គប្រុសក៏ដោយ ។ យោងតាមសៀវភៅ «ទស្សនីយភាពខ្មែរ» លើកឡើងថា ប៉ុន្តែបើពិនិត្យលើរបៀបសម្តែងវិញ សង្កេតឃើញថា មានភាពខុសគ្នាឆ្ងាយពីទម្រង់ល្ខោនបុរាណខ្មែរ ឬល្ខោនព្រះរាជទ្រព្យខ្មែរ ព្រោះល្ខោនក្បាច់បុរាណខ្មែរ ដែលមានតួសុទ្ធតែ ស្រីៗ បញ្ចេញតែកាយវិការដ៏ទន់ភ្លន់ ប្រណីតទៅតាមទំនុកចម្រៀងរបស់ក្រុមអ្នកច្រៀងជាពួក មិនមាននិយាយ ឬច្រៀងខ្លួនឯងឡើយ ។ ផ្ទុយទៅវិញនៅក្នុងទម្រង់ល្ខោនពោលស្រី ដែលក្បាច់បាតយកតាមលំអានល្ខោនក្បាច់ខ្មែរបុរាណ ឬល្ខោនព្រះរាជទ្រព្យនោះ ក្រៅពីពាក្យពោលដែលរៀបរាប់សាច់រឿង ឬកាត់កងឆាកដោយអ្នកពោលស្រី សិល្បការិនី អ្នកសម្តែងទាំងតួអង្គប្រុស សុទ្ធតែត្រូវរាំច្រៀង ឬនិយាយខ្លួនឯងទាំងអស់ ដែលពាក្យបច្ចេកទេសនៅក្នុងទម្រង់នេះនិយមហៅថា «ច្រៀងឯងរាំឯង» ។ ឯតួអង្គដែលពាក់មុខដូចជាយក្ស ស្វា ឥសី ជាដើម ពេលត្រូវនិយាយ គឺត្រូវបង្ហើបមុខរុញឡើងលើហើយនិយាយ ។ លក្ខណៈនេះឃើញមានភាពដូចគ្នាបេះបិទនឹងទម្រង់សិល្បៈយីកេ ដែលសម្តែងរឿង បុរាណៗ ដែលមានតួយក្ស តួស្វា តួគ្រុឌ ជាដើមនោះ ។ ឯសិល្បករ ប្រុសៗ អាចដើរតួជាឥសី ត្លុកកំប្លែង និងតួអង្គសត្វ ផ្សេងៗដូចជាសេះជាដើម ។",
      history:
        "&emsp;  ចំពោះប្រភព កាលបរិច្ឆេទកំណើត និងការវិវឌ្ឍរបស់ទម្រង់ល្ខោនពោលស្រីនេះវិញ អ្នកស្រាវជ្រាវមិនទាន់បានសិក្សាឱ្យហ្មត់ចត់នៅឡើយទេ ប៉ុន្តែបើតាមការសង្កេតឃើញថា ទម្រង់នេះមានតែនៅក្នុងស្រុក ខ្លះៗនៃខេត្តកណ្តាល ដូចជាស្រុកកៀនស្វាយ និងស្រុកខ្សាច់កណ្តាលប៉ុណ្ណោះ ហើយបើតាមព័ត៌មាន ខ្លះៗដែលបានទទួលរួចមកហើយនោះនាំឱ្យក្រុមអ្នកស្រាវជ្រាវមានគំនិតជាបណ្តោះអាសន្នថា ល្ខោនពោលស្រីនេះ គឺជា«កូនបង្កើតរបស់ល្ខោនព្រះរាជទ្រព្យ» ។ ក-អាចកើតមានឡើងក្នុងសម័យលង្វែក ពិសេសក្នុងរជ្ជកាលព្រះបរមខត្តិយាមហាចន្ទរាជា (១៥១៦-១៥៦៦) ព្រោះឯកសារមួយចំនួនបានឱ្យដឹងថា ព្រះអង្គជាព្រះមហាក្សត្រប្រកបដោយកិត្យានុភាព និងមានព្រះកិត្តិយសក្រអូបនៅក្នុងប្រវត្តិសាស្ត្រជាតិកម្ពុជា ។ ព្រះអង្គទ្រង់រាជ្យប្រកបដោយទសពិធរាជធម៌ ព្រះអង្គទ្រង់បានប្រមូល និងសម្រិតសម្រាំងអស់អ្នកប្រាជ្ញរាជបណ្ឌិតទាំងខាងផ្លូវលោក ទាំងខាងផ្លូវធម៌ ទាំងព្រះសង្ឃ និងគ្រហស្ថ ព្រមទាំងគម្ពីរ ដីកា ក្រាំង សាស្ត្រា ឯកសារទាំងអស់ទុកជាគ្រឹះព្រះនគរ ហើយទ្រង់បានលើកតម្កើងការកសាងវប្បធម៌ជាតិ មានចាត់ឱ្យហាត់ល្ខោនប្រុស ល្ខោនស្រីចម្រៀង តូរ្យតន្ត្រីសព្វបែបយា៉ងសម្រាប់ជាព្រះឥស្សរិយយសជាដើមផង... ។ ខ-ឬមួយល្ខោនពោលស្រីនេះ អាចកើតមាននៅក្នុងរជ្ជកាលព្រះបាទស្រីសុរិយោពណ៌ (១៦០៣-១៦១៨) ដែលទ្រង់សោយរាជ្យនៅរាជវាំងកោះស្វាកែត (សព្វថ្ងៃហៅកោះនរា) ស្រុកព្រៃល្វាផ្អែម គឺស្រុកល្វាឯម ដែលស្ថិតមិនឆ្ងាយប៉ុន្មានពីស្រុកកៀនស្វាយ ក្នុងខេត្តកណ្តាល ដែលមានក្រុមសិល្បៈល្ខោនពោលស្រីសព្វថ្ងៃនេះឯង ។ ឯកសារខ្លះបានរៀបរាប់បញ្ជាក់ថា សម្តេចព្រះរាជឱង្ការព្រះស្រីសុរិយោពណ៌បរមរាជា ជាព្រះមហាក្សត្រសឹកមួយអង្គដ៏អង់អាចក្លាហាន។ ព្រះអង្គមានមេទ័ពដ៏ខ្លាំងពូកែ គឺតេជោមាស និងតេជោយ៉ត ដែលជាសិស្សជំនិតរបស់លោក។ ព្រះអង្គទ្រង់សោយរាជ្យគ្រប់គ្រងរាស្ត្រប្រជាដោយយុត្តិធម៌ ហើយរៀបចំប្រទេសជាតិឱ្យបានសុខសន្តិភាព និងរីកចម្រើន ។ គ-បើមិនដូច្នោះទេ ទម្រង់ល្ខោនពោលស្រីនេះ អាចកើតមានក្នុងសម័យព្រះរាជសម្ភារពេញតួ (១៦២៩-១៦៣៤) ដែលជាព្រះមហាក្សត្រមួយអង្គទ្រង់ជក់ព្រះទ័យក្នុងវិស័យអក្សរសាស្ត្រណាស់ ហើយដែលពីដំបូងទ្រង់គង់នៅរាជធានីឧដុង្គ រួចព្រះអង្គទ្រង់យាងចេញពីរាជធានីឧដុង្គនេះ ទៅគង់នៅវាំកោះឃ្លោក (សព្វថ្ងៃហៅកោះឧកញា៉តី ស្រុកខ្សាច់កណ្តាល) ដើម្បីបំពេញកិច្ចខាងអក្សរសាស្ត្រ ដែលប្រហែលជាទ្រង់នាំទាំងក្រុមសិល្បៈល្ខោនពោលស្រីនេះមកជាមួយផង ដោយទុកកិច្ចការផែនដីថ្វាយព្រះឧទ័យ ជាព្រះបិតុលា គឺឪពុកមាងារជាឧបរាជឱ្យគង់នៅរាជធានីឧដុង្គមើលកិច្ចការជំនួស ។ ប្រហែលជាមានគ្រូល្ខោនពោលស្រីដែលសល់ពីរាជវាំងកោះឃ្លោកនោះមក ហើយដែលបន្តបង្រៀនក្រុមល្ខោនពោលស្រីនៅកៀនស្វាយ ដែលឃើញមានវត្តមានរហូតមកដល់ថ្ងៃនេះ ។ ឃ-ឬក៏អាចកើតមាននៅក្នុងរាជក្សត្រីអង្គម៉ី (១៨៣៣-១៨៤០) ដែលគង់នៅរាជវាំង កោះស្លាកែត ជិតស្រុកកៀនស្វាយ ក្នុងខេត្តកណ្តាលនោះឯង ? ទម្រង់ល្ខោនពោលស្រី ក៏ដូចជាទម្រង់សិល្បៈឯទៀតទាំងអស់របស់កម្ពុជា ត្រូវរបបប្រល័យពូជសាសន៍ (១៩៧៥ដល់១៩៧៩) រំលាយខ្ទេច ។ ចាប់ពីទសវត្សទី60 ល្ខោនពោលស្រីលែងមានការសម្តែង រហូតដល់ក្រោយមកទើបមានការសម្តែងជាលើកតំបូងនាពាក់កណ្តាលឆ្នាំ១៩៩៩ គិតទៅអស់រយៈពេលជិត២០ឆ្នាំ ក្រោយពីរបបប្រល័យពូជសាសន៍ដួលរលំទៅ ដោយការខំប្រឹងប្រែងរបស់គ្រូ ចាស់ៗ ដែលមានអាយុជាង70ឆ្នាំ ទៅ 80ឆ្នាំ(អត្ថបទសរសេរឆ្នាំ2001)ដែលសេសសល់ ហើយនៅបន្តប្រពៃណីរាំថ្វាយបារមីក្នុងវត្តកៀនស្វាយក្រៅជារៀងរាល់ឆ្នាំ ហើយភាគច្រើនជាកសិករក្រីក្រខំប្រមូលអំបែងបែកទាំងឡាយរបស់ល្ខោនពោលស្រីមកផ្តុំគ្នាមានដូចជា លោកតា នៅ ជា (គ្រូភ្លេង) លោកយាយ ជា មុត(តួនាយរោងឯក) លោកយាយ គិន យិន (តួយក្សនិងតួស្វា) លោកយាយ មាស ហូ (តួនាង) លោកយាយ សាន់ យឹន (តួនាង) លោកយាយ ណែម យឹន(តួ...) លោកយាយ អ៊ូ ណម (តួយក្ស) គួបផ្សំនឹងក្រុមអ្នកសិក្សាស្រាវជ្រាវរបស់ក្រសួងវប្បធម៌ ព្រមដោយការជួយឧបត្ថម្ភគាំទ្រទាំងសម្ភារ និងស្មារតីពីអង្គការក្រៅរដ្ឋាភិបាលនានាផង ទើបទម្រង់ល្ខោនពោលស្រីបានរស់ឡើងនៅចំពោះមុខទស្សនិកជនជាតិ និងអន្តរជាតិឡើងវិញនាឆ្នាំ1999សម្តែងនៅសាលចតុមុខ ឆ្នាំ2000សម្តែងនៅអង្គរវត្ត និងឆ្នាំ2008សម្តែងនៅសាលមហោស្រពចេនឡា ក៏ប៉ុន្តែគួរអោយសោកស្តាយនាពេលបច្ចុប្បន្នល្ខោនពោលស្រីបានបាត់បង់ការសម្តែងទៅហើយ។ ពត៌មានបន្ថែមៈ លោកអ្នកអាចអានសៀវភៅ ល្ខោនពោលស្រី រៀបរៀងដោយលោកសាស្រ្តាចារ្យ ចិន្ត នាគ ក្នុងឆ្នាំ2003",
      worldHeritage:
        "&emsp;ល្ខោនមួយនេះមិនទាន់បានចុះក្នុងបញ្ជីបេតិកភណ្ឌពិភពលោកនៅឡើយទេ។",
      reference: `<ul>
      <li>
        <a
          href=" http://kohsantepheapdaily.com.kh/article/121052.html "
          > http://kohsantepheapdaily.com.kh/article/121052.html </a
      <li>
    </ul>`
    });

    contentArr.push({
      src: `../images/lakhon-Niyey__content.jpg`,
      title: " ល្ខោននិយាយ",
      about:
        "&emsp;  ល្ខោននិយាយជាល្ខោនបែបទំនើបមួយដែលផ្ដោតលើទេពកោសល្យក្នុងការប្រើប្រាស់ពាក្យសម្ដីឆ្លើយឆ្លងផ្ដោះផ្ដងគ្នា។ល្ខោននិយាយនេះត្រូវបានចាត់ទុកជាទម្រង់សិល្បៈទី៦របស់ខ្មែរគឺអក្សរសិល្បិ៍ បូករួមជាមួយនឹងកាយវិការសម្ដែងរបស់តួអង្គ។ នេះតើតាមការបញ្ជាក់ប្រាប់របស់លោក ណេន ភារិទ្ធ អតីតនិស្សិតផ្នែកល្ខោននិយាយនៃសាកលវិទ្យាល័យភូមិន្ទវិចិត្រសិល្បៈនិងជាប្រធានក្រុមភារិទ្ធល្ខោននិយាយ។",
      history: `&emsp;   យោងតាមសៀវភៅតន្រ្តី របាំ និងល្ខោនខ្មែរ ដែលចងក្រងដោយ លោក ពេជ្រ ទុំក្រវ៉ិល បានឱ្យដឹងថាល្ខោននិយាយមានប្រភពមកពីបរទេស ដែលផ្តួចផ្តើមដំបូងបង្អស់ដោយលោក ឡា ហ្វង់តែន ជាទម្រង់ប្រភេទល្ខោនសម័យទំនើប ដែលយកពាក្យសម្តីជាធំ។ ល្ខោនមួយប្រភេទនេះ បានហូរចូលមកស្រុកខ្មែរ នៅរវាងឆ្នាំ ១៩៤៤-១៩៤៥ឆ្នាំ តាមរយៈជនជាតិបារាំងម្នាក់ឈ្មោះ ហ្គឺ ប៉ូរ៉េ នាចុងសម័យ អាណានិគមនិយមបារាំង។
<p class=”para”>គួរបញ្ជាក់ថា បន្ទាប់ពីមានវត្តមានពិតប្រាកដនៅក្នុងប្រទេសកម្ពុជាតាមរយៈ លោក ហ្គឺ ប៉ូរ៉េ យកមកផ្សព្វផ្សាយ លោក ហង្ស ធុនហាក់ ដែលជាអ្នកនិពន្ធរឿងល្ខោនផង និងជាអ្នកបកប្រែប្រលោមលោក បារាំងផង បានបង្កើតឱ្យមានល្ខោននិយាយនេះ ចាក់ផ្សាយក្នុងវិទ្យុនៅក្នុងព្រៃ ដើម្បីបង្ហាញអំពី ការស្នេហាជាតិរបស់ពលរដ្ឋខ្មែរ ក្នុងចលនានៅភ្នំដងរែក។ គ្រានោះហើយដែលប្រជាពលរដ្ឋខ្មែរ មួយចំនួនបានស្គាល់នៅប្រភេទល្ខោនបែបទំនើបនេះ ដែលពីមុនមក គ្មានអ្នកណាម្នាក់ស្គាល់ឡើយ ស្គាល់តែល្ខោនបុរាណ ដូចជាល្ខោនខោល ល្ខោនបាសាក់ និងល្ខោនយីកេជាដើម។</p>
<p class=”para”>ហេតុនេះ ទើបអ្នកស្រាវជ្រាវ បានចាត់ទុកថា លោក ហង្ស ធុនហាក់ គឺមនុស្សមុនដំបូងដែល ផ្តួចផ្តើមឱ្យមានល្ខោនទំនើប ឬល្ខោននិយាយនេះ នៅអំឡុងដើមទសវត្ស១៩៥០។ ដោយស្នាដៃនេះហើយ លោក ហង្ស ធុនហាក់ ត្រូវសម្តេចព្រះបរមរតនកោដ នរោត្តម សីហនុ បានតែងតាំងជាសាកលវិទ្យាធិការ នៃសាកលវិទ្យាល័យវិចិត្រសិល្បៈ។</p>
<p class=”para”>បើតាមសៀវភៅតន្រ្តី របាំ និងល្ខោនខ្មែរ របស់លោក ពេជ្រ ទុំក្រវ៉ិល តាំងពីពេលដែលប្រទេសកម្ពុជា បង្កើតសាលាជាតិផ្នែកល្ខោននៅឆ្នាំ១៩៥៩ និងសាកលភូមិន្ទវិចិត្រសិល្បៈឆ្នាំ១៩៦៤ មកទល់ពេលខ្មែរក្រហមដណ្តើមកាន់កាប់អំណាចឆ្នាំ១៩៧៥ គេសង្កេតឃើញថា ទម្រង់ល្ខោននិយាយ នៅប្រទេសកម្ពុជាទាំងល្ខោននិយាយលើឆាក ទាំងល្ខោននិយាយតាមវិទ្យុ និងទូរទស្សន៍ បានរីកចម្រើនយ៉ាងខ្លាំងក្លា។</p>
<p class=”para”>ក្នុងរយៈពេលនោះ មានអ្នកនិពន្ធ និងអ្នកដឹកនាំរឿងល្ខោនយ៉ាងជំនាញ ដូចជា លោកហង់ ធុនហាក់ លោក ពៅ យូឡេង លោក អ៊ុំ ឈីន លោក មាស តក លោក ឆេង ផុន លោក ហង់ ជួន លោក នួន កន លោកលី គឹមអួង លោក ហួត គឹមលាង លោកហ៊ីង ប៊ុនថុន លោក ប៉ុល សំអឿន លោក ផឹក សំផេន អ្នកស្រី អ៊ូ ចាន់ថន ព្រមទាំងបណ្តុះបណ្តាលបាន អ្នកនិពន្ធ និងអ្នកដឹកនាំរឿងល្ខោនជំនាន់ក្រោយជាច្រើននាក់ទៀតផង ដែលអាចនិពន្ធល្ខោននិយាយសម្រាប់ សម្តែងលើឆាក ល្ខោននិយាយសម្រាប់ទូរទស្សន៍ និងល្ខោននិយាយសម្រាប់វិទ្យុទៀតផង។ ក្រោយពីរបបប្រល័យពូជសាសន៍ប៉ុលពត បានដួលរលំទៅនៅឆ្នាំ១៩៧៩ សិល្បករផ្នែកល្ខោននិយាយ នៅសេសសល់តិចតួចបំផុត ដែលបានឆ្លងផុតពីការកាប់សម្លាប់ បាននាំគ្នាខំប្រឹងប្រែងធ្វើឱ្យទម្រង់ល្ខោននិយាយ ឱ្យរស់រានមានជីវិតឡើងវិញ។ ទោះជាល្ខោនមួយប្រភេទនេះមានដង្ហើមរស់រានក្នុង សង្គមកម្ពុជារហូតមកទល់បច្ចុប្បន្ននេះក៏ដោយ ប៉ុន្តែហាក់មិនសូវទទួលបានការគាំទ្រ ពីប្រជាពលរដ្ឋ កម្ពុជាប៉ុន្មាននោះទេ។</p>
<p class=”para”>ជុំវិញបញ្ហានេះ អ្នកនាំដឹកសម្តែងល្ខោននិយាយម្នាក់ គឺលោក នេន ភារិទ្ធ បានលើកឡើងបន្ទាប់ពីលោក បញ្ចប់ការសម្តែងនៅសារៈមន្ទីរជាតិកាលពីកន្លងមកនេះថា កាលពីទសវត្ស១៩៩០ ល្ខោននិយាយហាក់មានទីផ្សារសម្តែងខ្លាំង ដោយមានអង្គការមួយចំនួនជួលទៅសម្តែងរឿង បែបអប់រំនៅតាម សហគមន៍ដែលធ្វើឱ្យអ្នកសម្តែងមានទឹកចិត្ត ប៉ុន្តែក្រោយមកទីផ្សារល្ខោននិយាយកាន់តែបាត់បង់ទៅៗ ហើយមកទល់បច្ចុប្បន្នល្ខោននេះ កាន់តែមិនពេញនិយម។</p>
<p class=”para”>លោកបន្តថា ប្រជាពលរដ្ឋកម្ពុជា ពិសេសយុវជនតិចតួចបំផុតដែលគាំទ្រ និងស្គាល់ទម្រង់ល្ខោននិយាយនេះ ហើយប្រសិនបើគ្មានការជួយគាំទ្រទេ ទម្រង់ល្ខោនមួយនេះអាចប្រឈមនឹងការបាត់បង់។</p>
<p class=”para”>បើទោះជាជំនាញនេះបានបើកបង្រៀនក៏ដោយ ប៉ុន្តែមានសិស្សតិចតួចប៉ុន្តែដែលចាប់អារម្មណ៍រៀន ជំនាញ ល្ខោនមួយប្រភេទនេះ។ បច្ចុប្បន្ននេះអ្នកដែលសិក្សាជំនាញល្ខោននិយាយនេះ មានសឹងតែមិនដល់១០នាក់ផង ដែលកំពុងរៀននៅសាលាមធ្យមវិចិត្រសិល្បៈ៕</p>
`,
      worldHeritage:
        "&emsp;ល្ខោនមួយនេះមិនទាន់បានចុះក្នុងបញ្ជីបេតិកភណ្ឌពិភពលោកនៅឡើយទេ។",
      reference: `<ul>
      <li>
        <a
          href=" https://www.interconrooster.com/archives/project/1002181865"
          > https://www.interconrooster.com/archives/project/1002181865</a
      <li>
    </ul>`
    });

    // 1. add content to content structure
    for (var i = 0; i < contentArr.length; i++) {
      contentCtrl.addContent(
        contentArr[i].src,
        contentArr[i].title,
        contentArr[i].about,
        contentArr[i].history,
        contentArr[i].worldHeritage,
        contentArr[i].reference
      );
    }
  };

  var loadContent = function(ID) {
    var currentContent = contentArr[ID];
    UICtrl.addContentUI(currentContent);
  };

  return {
    init: function() {
      ID = parseInt(window.location.search.substring(1));
      addContent();
      loadContent(ID);
    },
    testing: function() {
      return contentArr;
    }
  };
})(contentController, UIController);

Controller.init();