const solvePuzzle = (input) => {
  const rows = input.split('\n');

  for (let row1 of rows) {
    for (let row2 of rows) {
      if (row1 === row2) continue;

      const similarityScore = calculateSimilarity(row1, row2);

      if (similarityScore === rows[0].length - 1) {
        return getRowWithoutDiff(row1, row2);
      }
    }
  }
}

const calculateSimilarity = (row1, row2) => {
  let score = 0;
  for (let [i, value] of row1.split('').entries()) {
    if (row2[i] === value) score++;
  }
  return score;
}

const getRowWithoutDiff = (row1, row2) => {
  let res = '';
  for (let [i, value] of row1.split('').entries()) {
    if (row2[i] === value) res += value;
  }
  return res;
}

const CORRECT_ANSWER = 'xretqmmonskvzupalfiwhcfdb';
const INPUT = `xrecqmdonskvzupalfkwhjctdb
xrlgqmavnskvzupalfiwhjctdb
xregqmyonskvzupalfiwhjpmdj
areyqmyonskvzupalfiwhjcidb
xregqpyonskvzuaalfiwhjctdy
xwegumyonskvzuphlfiwhjctdb
xregumymnskvzupalfiwhjctib
xregqmyonjkvzupalfvwijctdb
xrmgqmyonsdvzupalfiwhjcthb
xrpgqmyonskvzupalfiwhcitdb
xregvmysnsjvzupalfiwhjctdb
xregqsyonskvzupgqfiwhjctdb
qreuqmyonskvzupalfiwyjctdb
xrecqmyenskvzupalyiwhjctdb
xmegqmyonskvzhpalfcwhjctdb
xiegqmyonskvzupalfkwhjjtdb
xreaqmyofskfzupalfiwhjctdb
xregqmypnskvzupalmiwhjltdb
xretqmmonskvzupalfiwhwcfdb
xrexqmkonskvzupalfiwjjctdb
xrigqmyonskvgupplfiwhjctdb
xregqmyotskvzupalfywhjctdm
xcegmmyonsvvzupalfiwhjctdb
xrezqmypnskvznpalfiwhjctdb
xragqmyonskvzupblfiwajctdb
xregqmyonskvzwpapfiwhjctqb
xoegqmyoyskvzupaufiwhjctdb
xrcgqmyjnskvzupalfcwhjctdb
xregqmyonskvzudalfipajctdb
xsegqmyonsklzupalwiwhjctdb
xregqmyocskvduaalfiwhjctdb
xhegqmyfnskvzupalflwhjctdb
xregqmymnykvzupalfiwhjctdm
xregqmybnskvzupacfiwdjctdb
xaegqmlonskvzfpalfiwhjctdb
xoegtmyonskvzupalfiwhwctdb
xregqmyohskvzupaqfiwhjccdb
xoegqmyonstvzupalfiwhjctbb
mregnmyonskszupalfiwhjctdb
xreoqmycnskvzupalfiphjctdb
xregqmyocskvdupacfiwhjctdb
xregqmyonskvzupajqiahjctdb
xregqmyonslvwupalfiwhjcfdb
xregqmyonskvzapalfiwhqcthb
xrerqmyonskwzupalfiwhjctdt
xrefqmfonskvzupalfiwcjctdb
xregqmyonskvzupadfiwhjxedb
iregqhyonskvzupaliiwhjctdb
iregqmyotskvzucalfiwhjctdb
xrbgqmaonrkvzupalfiwhjctdb
xregqmyonskvzupalfixhdctdf
xrehqmyonskvzupalfiwijctdd
xvegqmyonskvzupaleuwhjctdb
xregqmyiyskvzupalfiwqjctdb
hregqmyonskvzupaxfiwhjptdb
xregamyznskbzupalfiwhjctdb
xreyqmyonskvgupalziwhjctdb
xregqmysnskvzupalfiwhgctdu
xojgqmyonskvzupalfiwbjctdb
xrkgqmyonskvlupalfiwhjcwdb
xregqmyonwkvxupalfiwajctdb
xregqmyonsuvzupalfjwhjcxdb
xregqmyonskgzucalfiwhjstdb
xaegqmyonfkvzupalfiwhjcttb
xlegqmyonskvzupazfiwhjctqb
xrejqmyonskvzqpaldiwhjctdb
xreguryonskvzupalfiwhjctdz
xregqsyoeskvzupalfiwhjctdt
xregqmyonskvzubalfirhjctdp
xrepqmymnskvzupadfiwhjctdb
xregqayonskvzuoalfichjctdb
xreqqmyonskvzunalfiwojctdb
xregqmyonsivzufalciwhjctdb
xregqqeonskvzupanfiwhjctdb
xoegqmyunskvzppalfiwhjctdb
xregqmyonskvzupalfqwhnftdb
xregqmyonskvzuralkiwhjcudb
xrwgqmymnskvzupalfiwhjcgdb
xvrgqmyonskvzupalfiwhjcthb
xregemyonskkzupalfiwhjctbb
xregqmyonsevzupalfiwhjjtdl
xregqmyonckvcupajfiwhjctdb
xregqmysnskvzunalfnwhjctdb
xreowmyonskvkupalfiwhjctdb
xregqmyonskvjupalfiwhjytdr
xregqmyonskyzupaffiwhmctdb
xrsgqmyonszvzupmlfiwhjctdb
xzegqmyonskvnupalfiwfjctdb
qregqmyonskvzupalfiwhrctjb
xpegqmyonsivzupqlfiwhjctdb
xregqmyoyskrzupalfiwhjctdx
xregqmyonsqvzupalfiwhjdndb
xregjmyonskvzppalfiwhjcgdb
xregqmyziskvzupalfiwhjctib
xregqmyonmkvbupalfiwhjckdb
xtegamyonskvzupalniwhjctdb
xregqpyonskvzhpwlfiwhjctdb
xvegqmfonskvzupalfiwhjcadb
xregqmyonskvzupaysiwhjctxb
xrejqmyonudvzupalfiwhjctdb
llegqmyonskvzbpalfiwhjctdb
tcegqmbonskvzupalfiwhjctdb
lregqmyohskvzupalfiwhjcttb
xrngqmcfnskvzupalfiwhjctdb
xregqmyonspvzuuplfiwhjctdb
xrxgqmyonslvzupalfiwhjctdo
xregqmyonskvzulalfuwhjdtdb
xregqmnonskvzupalfvwhjckdb
xregqbyfnskvzupaltiwhjctdb
xregqmyodsovzwpalfiwhjctdb
xregomyonskvhrpalfiwhjctdb
xregqmfdnskvzupalliwhjctdb
xregqmyonskvzupaabithjctdb
xrngamyonskvzupalfiwhjcttb
xrhgqmyonskvzupaldifhjctdb
xrygzmyonskvzupatfiwhjctdb
xregqmyonskvzupiqtiwhjctdb
xregqmyonfkvzupalfiwxjcsdb
xregqsyunskvzupalfiwhjctde
xrzgqmyolskvzupasfiwhjctdb
xgegqmyoyskvzupalfiwfjctdb
xrvgqlyohskvzupalfiwhjctdb
xregcmyonskvzuprlyiwhjctdb
xregqmyonskvwjpalfiwsjctdb
xrfgqmyonskvzupalfidhactdb
xcegqmyonwkvzdpalfiwhjctdb
nregqmyrnskvzupalciwhjctdb
xcegqmyonskvzvpalfiwhjctdj
xregqmyonskvzupqssiwhjctdb
xregcmyonskvzupalfinhjutdb
xregqmyonskvzupzlfiwcjctnb
xnegqmyozskvzbpalfiwhjctdb
xregvmponskvzupalfiwhsctdb
xregqmyonskvpupalqichjctdb
xreqqmyonskvzupauuiwhjctdb
xregqryonskvzupatfiwhjctyb
hregqmyonokvzupalfiwhmctdb
xreuqmionckvzupalfiwhjctdb
xregqmyoiskvzupanfiwhjntdb
xrdgqmronskvzupaluiwhjctdb
xadgqmyunskvzupalfiwhjctdb
eregqmzonskvzupakfiwhjctdb
xiegqmyonskvnupblfiwhjctdb
yregqmzonskvzupalfiwhjotdb
xregqmyonskvjupalfiwhjhtvb
wregqmyonskvzzprlfiwhjctdb
xregqmyovskvzupalgiuhjctdb
xregqmyonskjzupelfuwhjctdb
xregqmysuskvpupalfiwhjctdb
xrebqkyonskvzupalfiwpjctdb
xregcmyonskvzipalfiwhjcttb
xregqmyonskdyupalfiwgjctdb
xregcmyonskvzupalfiwijctnb
xregqmyonsovdupalfrwhjctdb
xregqmaonskvzupalnkwhjctdb
xregqmysnfkvzupalfiwhictdb
xregqmyonswvzupalfiyhjctdf
xreoqmyrnskvzupalfihhjctdb
tregqmydnskvzupalfizhjctdb
xregxmyonykvzupalfnwhjctdb
xzegqnyonskuzupalfiwhjctdb
xregqmfonszvvupalfiwhjctdb
xrerqmyjnskvzupalfiwhpctdb
xregqmyanskvzupalffphjctdb
rregqmyogskvzupalfiehjctdb
xrpgqmyonspvzupalfiwgjctdb
xuegqmppnskvzupalfiwhjctdb
xregqmyonskvzqpalsiwhjhtdb
xregqzyonskvzkpalfiwujctdb
xrdgqmyonskvzupglfiwhjctdu
xregqmyonskqzupahciwhjctdb
treqqmyonskvzupalfiwhjcqdb
vlegqmyonskvzupalfiwhjwtdb
xregjmyonskviupglfiwhjctdb
xreggmyanskvzupalfiwhjcydb
xregqmybnskvzuprlfiwhjmtdb
xrsgqmyonskizupagfiwhjctdb
xregqmyenskvzupalfvwhjctib
lrygqmyonsrvzupalfiwhjctdb
xregqmjonskvqupalfiwhjctdu
xregqmyonsknzmpzlfiwhjctdb
xregqmyonhkvzupllfiwhjctdz
xregqmronskvdumalfiwhjctdb
xrpgqmyonskvzupalfhwhjhtdb
xfegqmeonskvzupasfiwhjctdb
xregqqyonskvzrpalfiwijctdb
xretqmmonskvzupalfiwhjcfdb
xregqmyonskvznpalniwhjztdb
xregqmyqnskvzuoalfiwhhctdb
xregqmyonsbvzupalviwhjxtdb
xregqmyonskvzupazmiwhhctdb
xregqmyosskvzupalflwhjctdw
xtegqmyonskvzupamciwhjctdb
xregamyonskvzbpalfiwhqctdb
xregqmgonskvzupalfiwhictxb
xregqmyonskvjupvlfnwhjctdb
xrthqmyonskvzupalfiwhjctub
xrexqmyoyskvzupalfiwhjcadb
xvegqmyonskvxupalfiwhjztdb
xregqmyonskgzupalhiwhjptdb
xregqmysnskvzufalpiwhjctdb
xregqmyonskvbipalfighjctdb
xregqmyonskvzupylfiwhjwvdb
gregqmyonskvzupalfikhjctdt
ujegqmyonskvzupalfiwhjctlb
nreqqmyonskjzupalfiwhjctdb
xregqmyonskvzupanfbwhjchdb
xregqyyoeskwzupalfiwhjctdb
xregqmyokskvzgpalfiwhnctdb
lregqmyonskvzupalfawsjctdb
xtegqmyonskvzmpalfiwhjctmb
xtegqvyonskvzupalfiwhjdtdb
xpegqpyonekvzupalfiwhjctdb
qregqmyonskvzupalfiwmjctdn
xregqnyosskvzupalfibhjctdb
xregqmyonsknzupalflwhjctfb
xregqmxoyskvzuealfiwhjctdb
xregdmyoeskvzupalfiwhfctdb
xremmmyonskvzupalfiwhxctdb
xregqmconskvzupylfuwhjctdb
xregqmyonskvzupawiiwhictdb
xlegsmyonskvzupalfiwhbctdb
xregqmyonsavzopalyiwhjctdb
xregqmyonskczupalfibhvctdb
xregqmyonskvzvpalfiunjctdb
xregqmyonskvdupalfiwhjczdp
xregqmyonskvzupklfswhhctdb
xrelqmyonskvzupalyiwhjctdi
xrcgqmyonskvzupalfieqjctdb
xregqmnonskvzupacfewhjctdb
xrwgqmyonskvzuealfiwhcctdb
xregqiyonsevzmpalfiwhjctdb
xregqmyonjyvzupalfiwhjckdb
xregqmyonyklzupadfiwhjctdb
xregqmyanskvzupolfiwhjctpb
xdbgqmyonskvzupslfiwhjctdb
xregqmhonykvzupalfawhjctdb
xregqmqonsivzupalfifhjctdb
xregqgyonsrvzupalfiwhjctib
xregqmyofskvzupalfiwlfctdb
xregqmyovskvzupllftwhjctdb
xregqmyonskvzupaciiwhuctdb
xregqmyonsdvzuhalfiwhjhtdb
xreiqmyonskvzupalfiwhncldb
xregqmyongkvzugalfiwhjctxb
xregqsyonskvzrpmlfiwhjctdb
xrogqmyonskvzxpalfiwhbctdb
xregqmkonskvzuqalfiwhjptdb
xregqmyonskvvxpalfiwhactdb
xregqmyonskvzupsliiwhwctdb`;

const result = solvePuzzle(INPUT);
console.log('--- Puzzle result ---\n');
console.log(result);
console.log(result === CORRECT_ANSWER ? 'Test success' : 'Test fail');
console.log('\n---------------------');
