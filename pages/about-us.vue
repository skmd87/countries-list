<template>
  <div>
    <h1 class="mb-4">{{ $t('common.about-us') }}</h1>
    <v-skeleton-loader
      :loading="$fetchState.pending"
      type="headline,sentences@5"
    >
      <v-sheet color="transparent" v-html="serverData.body"> </v-sheet>
    </v-skeleton-loader>
  </div>
</template>

<script>
import countriesStore from '~/mixins/countriesStore'
import meta from '~/mixins/meta'
export default {
  name: 'IndexPage',
  mixins: [countriesStore, meta],
  data() {
    return {
      limit: 12,
      meta: {
        title: this.$t('common.about-us'),
      },
      serverData: {},
    }
  },
  async fetch() {
    await new Promise((resolve, reject) => {
      /* eslint-disable-next-line */
      setTimeout(() => {
        this.serverData = {
          body:
            this.$i18n.locale === 'ar'
              ? `<p>ابجد هوز حطي كلمن سعفص قرشت ويكيبيديا. الأبجدية الفينيقية الكنعانية من أقدم الكتابات الأبجدية تتألف من اثنين وعشرين حرفا تتبع ترتيب أبجد هوز حطي كلمن سعفص قرشت وتكتب من اليمين إلى اليسار واستخدمت في المنطقة الساحلية لشرقي البحر المتوسط في الفترة من. أبجد ʾabjad m plural أبجدات ʾabjadāt alphabet abjad plural elementary facts simple truths. أبجد هوز حطي كلمن سعفص قرشت ثخذ ضظغ حساب الجمل طريقة حساب قديمة جميلة ومفيدة تعلمت احسب بها عدد ابيات التحفة و.</p>
<h2>أبجد هوز حطي كلمن  قرشت ثخذ </h2>
حروف أبجد هوز حطي كلمن واعتماد المنجمين عليها. أبجد هوز حطي كلمن سعفص قرشت ثخذ ضظغ. قرشت كلمن إن الكلمات الست الأولى و هي أبجد هوز حطي كلمن سعفص قرشت أسماء ملوك مدين و كلمن رئيسهم وقد هلكوا جميعا يوم الظلة مع قوم شعيب عليه السلام.

ما هي معاني ابجد هوز حطي كلمن سعفص قرشت ثخذ ضظغ و هل هي مجرد كلمات عشوائية ما هي معانيها و ما هو دورها. وتشبه ترتيب حروف الهجاء قديما في اللغة العربية وقد أخذ هذا الترتيب من. وقد أخذ هذا الترتيب من الترتيب السامي القديم في العربية والكلمتان ثخذ وضظغ.
<h2>أبجد هوز حطي كلمن  ثخذ </h2>
أبجد هوز حطي كلمن سعفص قرشت ثخذ ضظغ. أبجد هوز هو الترتيب الأبجدي للأحرف العربية ويختلف عن الترتيب الهجائي وصورته في دول المشرق العربي كالآتي. أبجد هوز حطي كلمن سعفص قرشت ثخذ ضظغ.

أبجد هوز حطي كلمن سعفص قرشت ثخذ ضظغ. أبجد هوز حطي كلمن سعفص قرشت ثخذ ضظغ ʾabjad hawwaz ḥaṭṭī kalaman saʿafaṣ qarašat ṯaxxaḏ ḍaẓẓağ Noun. أبجد هوز هو الترتيب الأبجدي للحروف العربية ويختلف عن الترتيب الهجائي وصورته.
<h2>أ حطي كلمن سعفص  ثخذ </h2>
أبجد هوز حطي كلمن سعفص قرشت ثخذ ضظغ أبجد بمعنى أخذ هوز بمعنى ركب حطي بمعنى وقف كلمن بمعنى أصبح متعلما سعفص بمعنى أسرع في التعلم قرشت بمعنى أخذه بالقلب ثخذ بمعنى حفظ ضظغ بمعنى أتم. ابجد هوز حطي كلمن سعفص قرشت ثخذ ضظغ. حيث أن أبجد هوز هو الترتيب الأبجدي للحروف العربية وهو يختلف تماما عن الترتيب الهجائي للحروف العربية.

أبجد هوز حطي كلمن سعفص قرشت ثخذ ضظغ معنى كلمن`
              : `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non eleifend enim. Nam vehicula ut urna ac iaculis. Praesent non magna dui. Morbi vitae dictum dolor, ultrices imperdiet sapien. Praesent iaculis lectus at consequat lobortis. Ut eu ex id urna tempor mollis. Quisque luctus magna non fermentum maximus. Etiam ullamcorper sem semper leo gravida rhoncus. Nullam lectus urna, laoreet ac magna in, ultrices suscipit tellus. Curabitur egestas lacus justo, id ullamcorper lectus interdum a. Proin odio leo, tincidunt sit amet dolor nec, porta tristique velit. Praesent eros quam, feugiat a metus eget, semper commodo ipsum. In hac habitasse platea dictumst. Nunc consectetur dui a turpis cursus, sit amet sodales ipsum feugiat. Aliquam mattis accumsan nunc, iaculis imperdiet mi fringilla vel. Nunc euismod tincidunt enim ut posuere.</p>
<h2>Lorem ipsum dolor sit amet</h2>
<p>
  Phasellus elementum fringilla iaculis. Suspendisse volutpat justo leo, eu mattis ex vulputate pretium. Quisque purus ipsum, molestie quis eleifend at, viverra ut erat. Nullam sit amet feugiat nibh, gravida fermentum nibh. In in mauris augue. Aliquam urna erat, volutpat sed elit ac, hendrerit mollis lacus. Quisque euismod tempus leo et dapibus. Nulla rutrum risus metus. Proin dui metus, tristique vel quam facilisis, fermentum ultricies urna.
  
  Nulla tincidunt lorem sem, a tristique tellus ultricies ut. Praesent ut maximus nisi. Quisque suscipit pulvinar velit, ac hendrerit dui varius id. Duis gravida quis mi id accumsan. Sed sed facilisis augue, a lacinia risus. Nam ut ultrices eros, sit amet placerat felis. Pellentesque at velit eu justo pulvinar luctus eu vitae ipsum. Duis in porttitor eros. Nullam imperdiet mauris nec diam hendrerit egestas. Integer mauris elit, facilisis tincidunt lacinia et, consequat vitae augue. Etiam in nisl ligula.
</p>
<h2>Lorem ipsum dolor sit amet</h2>
<p>
  Sed facilisis congue rhoncus. Aenean ultrices lorem et diam lacinia hendrerit et a lectus. Ut vel augue vitae nulla congue convallis non eget libero. Suspendisse potenti. Suspendisse vitae tempus velit, eu ornare urna. Aenean iaculis porta dolor. Suspendisse rutrum augue quam, ac fringilla ipsum aliquam ac. Sed fringilla tincidunt lacus, in porta neque rutrum ac. Integer nec tristique enim, ac pretium metus. Curabitur ut quam ex. Suspendisse sit amet fermentum urna. In hac habitasse platea dictumst. Proin faucibus sem vitae est volutpat, sit amet congue lectus pellentesque. Nam nisl ex, posuere vel velit vitae, aliquet condimentum risus. Pellentesque mattis vehicula felis, nec porttitor purus bibendum eu.
  
  Sed at lectus cursus, hendrerit velit at, pharetra ex. Etiam vitae laoreet quam. Nullam neque magna, maximus eu turpis eget, feugiat eleifend odio. Ut sed feugiat augue, eget semper nisl. Ut id tellus ac magna molestie vehicula. Sed ut augue posuere nisl molestie consectetur ac eget enim. Duis a dolor metus. Nam vitae pellentesque lacus. Vivamus quam augue, scelerisque quis viverra sit amet, laoreet suscipit sem. Ut rhoncus tortor tincidunt tellus tincidunt, eget vehicula neque volutpat. Etiam non tortor sit amet ex ullamcorper tristique nec quis lacus.
</p>`,
        }
        resolve()
      }, 1000)
    })
  },

  methods: {},
}
</script>
