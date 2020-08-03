function getVowel(kana) {
    if (kana.length != 1)
        console.error('This is a wrong length.')
    if ('あかさたなはまやらわがざだばぱ'.indexOf(kana) != -1)
        return 'a'
    else if ('いきしちにひみりぎじぢびぴ'.indexOf(kana) != -1)
        return 'i'
    else if ('うくすつぬふむゆるぐずづぶぷ'.indexOf(kana) != -1)
        return 'u'
    else if ('えけせてねへめれげぜでべぺ'.indexOf(kana) != -1)
        return 'e'
    else if ('おこそとのほもよろごぞどぼぽ'.indexOf(kana) != -1)
        return 'o'
    else
        console.error('It is not a right kana.')
}
function isGodan(word) {
    if (
        word == '要る' ||
        word == '焦る' ||
        word == '帰る' ||
        word == '限る' ||
        word == '切る' ||
        word == '蹴る' ||
        word == '滑る' ||
        word == '知る' ||
        word == '握る' ||
        word == '捻る' ||
        word == '入る' ||
        word == '練る' ||
        word == '走る' ||
        word == '参る' ||
        word == '減る' ||
        word == '滅入る' ||
        word == '交じる' ||
        word == '嘲る' || word == 'あざける' ||
        word == '遮る' || word == 'さえぎる' ||
        word == '喋る' || word == 'しゃべる' ||
        word == '罵る' || word == 'ののしる' ||
        word == '覆る' || word == 'くつがえる' ||
        word == '翻る' || word == 'ひるがえる' ||
        word == '蘇る' || word == '甦る' || word == 'よみがえる' ||

        word == '行く' || word == '有る'
    )
        return true;
}
function convertKana(kana, oldVowel, newVowel) {
    const kanas = [
        ['わ', 'い', 'う', 'え', 'お'],
        ['か', 'き', 'く', 'け', 'こ'],
        ['が', 'ぎ', 'ぐ', 'げ', 'ご'],
        ['さ', 'し', 'す', 'せ', 'そ'],
        ['ざ', 'じ', 'ず', 'ぜ', 'ぞ'],
        ['た', 'ち', 'つ', 'て', 'と'],
        ['だ', 'ぢ', 'づ', 'で', 'ど'],
        ['な', 'に', 'ぬ', 'ね', 'の'],
        ['は', 'ひ', 'ふ', 'へ', 'ほ'],
        ['ば', 'び', 'ぶ', 'べ', 'ぼ'],
        ['ぱ', 'ぴ', 'ぷ', 'ぺ', 'ぽ'],
        ['ま', 'み', 'む', 'め', 'も'],
        ['や', 'ゝ', 'ゝ', 'ゝ', 'よ'],
        ['ら', 'り', 'る', 'れ', 'ろ'],
        ['わ', 'ゐ', 'ゝ', 'ゑ', 'を']
    ];
    if (newVowel == 'a') newVowel = '0'
    else if (newVowel == 'i') newVowel = '1'
    else if (newVowel == 'u') newVowel = '2'
    else if (newVowel == 'e') newVowel = '3'
    else if (newVowel == 'o') newVowel = '4'
    if (oldVowel == 'a') oldVowel = '0'
    else if (oldVowel == 'i') oldVowel = '1'
    else if (oldVowel == 'u') oldVowel = '2'
    else if (oldVowel == 'e') oldVowel = '3'
    else if (oldVowel == 'o') oldVowel = '4'
    for (let i = 0; i < kanas.length; i++) {
        if (kana == kanas[i][oldVowel])
            return kanas[i][newVowel]
    }
}
function refresh(estimatedVerbType) {
    if (word.length < 2)
        return;
    //判断动词类型
    //0:unknown，1：くる，2：する，3：う，4：る
    if (estimatedVerbType == 0) {
        if (word == 'くる' || word == '来る')
            estimatedVerbType = 1
        else if (word == 'する')
            estimatedVerbType = 2
        else if (getVowel(word[word.length - 1]) == 'u' && word[word.length - 1] != 'る')
            estimatedVerbType = 3
        else if (word[word.length - 1] == 'る') {
            if (isGodan(word) || getVowel(word[word.length - 2]) == 'a' || getVowel(word[word.length - 2]) == 'u' || getVowel(word[word.length - 2]) == 'o')
                estimatedVerbType = 3
            else if (getVowel(word[word.length - 2]) == 'i' || getVowel(word[word.length - 2]) == 'e')
                estimatedVerbType = 4
            else
                alert('请将倒数第二个字符改写为假名形式。')
        } else
            alert('请将最后一个字符改写为う段假名形式。')
    }
    if (estimatedVerbType == 1) {
        //以后有空整理一下顺序吧
        words[0].innerText = '来（き）'
        words[1].innerText = '来（く）る'
        words[2].innerText = '来（こ）ない'
        words[3].innerText = '来（き）た'
        words[11].innerText = '来（こ）なかった'
        words[27].innerText = '来（き）ます'
        words[28].innerText = '来（き）ません'
        words[29].innerText = '来（き）ました'
        words[35].innerText = '来（き）ませんでした'
        words[4].innerText = '来（き）て'
        words[30].innerText = '来（き）まして'
        words[12].innerText = '来（こ）なくて'
        words[36].innerText = '来（き）ませんでして'
        words[5].innerText = '来（こ）られる'
        words[13].innerText = '来（こ）られない'
        words[14].innerText = '来（こ）られた'
        words[21].innerText = '来（こ）られなかった'
        words[31].innerText = '来（こ）られます'
        words[37].innerText = '来（こ）られません'
        words[38].innerText = '来（こ）られました'
        words[44].innerText = '来（こ）られませんでした'
        words[8].innerText = '来（く）れば'
        words[20].innerText = '来（こ）なければ'
        words[9].innerText = '来（こ）よう'
        words[34].innerText = '来（き）ましょう'
        words[6].innerText = '来（こ）させる'
        words[15].innerText = '来（こ）させない'
        words[16].innerText = '来（こ）させた'
        words[22].innerText = '来（こ）させなかった'
        words[32].innerText = '来（こ）させます'
        words[39].innerText = '来（こ）させません'
        words[40].innerText = '来（こ）させました'
        words[45].innerText = '来（こ）させませんでした'
        words[7].innerText = '来（こ）られる'
        words[17].innerText = '来（こ）られない'
        words[18].innerText = '来（こ）られた'
        words[23].innerText = '来（こ）られなかった'
        words[33].innerText = '来（こ）られます'
        words[41].innerText = '来（こ）られません'
        words[42].innerText = '来（こ）られました'
        words[46].innerText = '来（こ）られませんでした'
        words[19].innerText = '来（こ）させられる'
        words[24].innerText = '来（こ）させられない'
        words[25].innerText = '来（こ）させられた'
        words[26].innerText = '来（こ）させられなかった'
        words[43].innerText = '来（こ）させられます'
        words[47].innerText = '来（こ）させられません'
        words[48].innerText = '来（こ）させられました'
        words[49].innerText = '来（こ）させられませんでした'
        words[10].innerText = '来（こ）い'
    } else if (estimatedVerbType == 2) {
        words[0].innerText = 'し'
        words[1].innerText = 'する'
        words[2].innerText = 'しない'
        words[3].innerText = 'した'
        words[11].innerText = 'しなかった'
        words[27].innerText = 'します'
        words[28].innerText = 'しません'
        words[29].innerText = 'しました'
        words[35].innerText = 'しませんでした'
        words[4].innerText = 'して'
        words[30].innerText = 'しまして'
        words[12].innerText = 'しなくて'
        words[36].innerText = 'しませんでして'
        words[5].innerText = '出来（でき）る'
        words[13].innerText = '出来（でき）ない'
        words[14].innerText = '出来（でき）た'
        words[21].innerText = '出来（でき）なかった'
        words[31].innerText = '出来（でき）ます'
        words[37].innerText = '出来（でき）ません'
        words[38].innerText = '出来（でき）ました'
        words[44].innerText = '出来（でき）ませんでした'
        words[8].innerText = 'すれば'
        words[20].innerText = 'しなければ'
        words[9].innerText = 'しよう'
        words[34].innerText = 'しましょう'
        words[6].innerText = 'させる'
        words[15].innerText = 'させない'
        words[16].innerText = 'させた'
        words[22].innerText = 'させなかった'
        words[32].innerText = 'させます'
        words[39].innerText = 'させません'
        words[40].innerText = 'させました'
        words[45].innerText = 'させませんでした'
        words[7].innerText = 'される'
        words[17].innerText = 'されない'
        words[18].innerText = 'された'
        words[23].innerText = 'されなかった'
        words[33].innerText = 'されます'
        words[41].innerText = 'されません'
        words[42].innerText = 'されました'
        words[46].innerText = 'されませんでした'
        words[19].innerText = 'させられる'
        words[24].innerText = 'させられない'
        words[25].innerText = 'させられた'
        words[26].innerText = 'させられなかった'
        words[43].innerText = 'させられます'
        words[47].innerText = 'させられません'
        words[48].innerText = 'させられました'
        words[49].innerText = 'させられませんでした'
        words[10].innerText = 'しろ'
    } else if (estimatedVerbType == 3) {
        if (word == 'いく' || word == '行く') {
            words[0].innerText = '行（い）き'
            words[1].innerText = '行（い）く'
            words[2].innerText = '行（い）かない'
            words[3].innerText = '行（い）った'
            words[11].innerText = '行（い）かなかった'
            words[27].innerText = '行（い）きます'
            words[28].innerText = '行（い）きません'
            words[29].innerText = '行（い）きました'
            words[35].innerText = '行（い）きませんでした'
            words[4].innerText = '行（い）って'
            words[30].innerText = '行（い）きまして'
            words[12].innerText = '行（い）かなくて'
            words[36].innerText = '行（い）きませんでして'
            words[5].innerText = '行（い）ける'
            words[13].innerText = '行（い）けない'
            words[14].innerText = '行（い）けた'
            words[21].innerText = '行（い）けなかった'
            words[31].innerText = '行（い）けます'
            words[37].innerText = '行（い）けません'
            words[38].innerText = '行（い）けました'
            words[44].innerText = '行（い）けませんでした'
            words[8].innerText = '行（い）けば'
            words[20].innerText = '行（い）かなければ'
            words[9].innerText = '行（い）こう'
            words[34].innerText = '行（い）きましょう'
            words[6].innerText = '行（い）かせる'
            words[15].innerText = '行（い）かせない'
            words[16].innerText = '行（い）かせた'
            words[22].innerText = '行（い）かせなかった'
            words[32].innerText = '行（い）かせます'
            words[39].innerText = '行（い）かせません'
            words[40].innerText = '行（い）かせました'
            words[45].innerText = '行（い）かせませんでした'
            words[7].innerText = '行（い）かれる'
            words[17].innerText = '行（い）かれない'
            words[18].innerText = '行（い）かれた'
            words[23].innerText = '行（い）かれなかった'
            words[33].innerText = '行（い）かれます'
            words[41].innerText = '行（い）かれません'
            words[42].innerText = '行（い）かれました'
            words[46].innerText = '行（い）かれませんでした'
            words[19].innerText = '行（い）かせられる'
            words[24].innerText = '行（い）かせられない'
            words[25].innerText = '行（い）かせられた'
            words[26].innerText = '行（い）かせられなかった'
            words[43].innerText = '行（い）かせられます'
            words[47].innerText = '行（い）かせられません'
            words[48].innerText = '行（い）かせられました'
            words[49].innerText = '行（い）かせられませんでした'
            words[10].innerText = '行（い）け'
        } else if (word == 'ある' || word == '有る') {
            words[0].innerText = '有（あ）り'
            words[1].innerText = '有（あ）る'
            words[2].innerText = '無（な）い'
            words[3].innerText = '有（あ）った'
            words[11].innerText = '無（な）かった'
            words[27].innerText = '有（あ）ります'
            words[28].innerText = '有（あ）りません'
            words[29].innerText = '有（あ）りました'
            words[35].innerText = '有（あ）りませんでした'
            words[4].innerText = '有（あ）って'
            words[30].innerText = '有（あ）りまして'
            words[12].innerText = '無（な）くて'
            words[36].innerText = '有（あ）りませんでして'
            words[5].innerText = '有（あ）り得（え/う）る'
            words[13].innerText = '有（あ）り得（え）ない'
            words[14].innerText = '有（あ）り得（え）た'
            words[21].innerText = '有（あ）り得（え）なかった'
            words[31].innerText = '有（あ）り得（え）ます'
            words[37].innerText = '有（あ）り得（え）ません'
            words[38].innerText = '有（あ）り得（え）ました'
            words[44].innerText = '有（あ）り得（え）ませんでした'
            words[8].innerText = '有（あ）れば'
            words[20].innerText = '無（な）ければ'
            words[9].innerText = '有（あ）ろう'
            words[34].innerText = '有（あ）りましょう'
            words[6].innerText = '有（あ）らせる'
            words[15].innerText = '有（あ）らせない'
            words[16].innerText = '有（あ）らせた'
            words[22].innerText = '有（あ）らせなかった'
            words[32].innerText = '有（あ）らせます'
            words[39].innerText = '有（あ）らせません'
            words[40].innerText = '有（あ）らせました'
            words[45].innerText = '有（あ）らせませんでした'
            words[7].innerText = '有（あ）られる'
            words[17].innerText = '有（あ）られない'
            words[18].innerText = '有（あ）られた'
            words[23].innerText = '有（あ）られなかった'
            words[33].innerText = '有（あ）られます'
            words[41].innerText = '有（あ）られません'
            words[42].innerText = '有（あ）られました'
            words[46].innerText = '有（あ）られませんでした'
            words[19].innerText = '有（あ）らせられる'
            words[24].innerText = '有（あ）らせられない'
            words[25].innerText = '有（あ）らせられた'
            words[26].innerText = '有（あ）らせられなかった'
            words[43].innerText = '有（あ）らせられます'
            words[47].innerText = '有（あ）らせられません'
            words[48].innerText = '有（あ）らせられました'
            words[49].innerText = '有（あ）らせられませんでした'
            words[10].innerText = '有（あ）れ'
        } else {
            let front = word.substring(0, word.length - 1)
            let after = word.substring(word.length - 1)
            words[0].innerText = front + convertKana(after, 'u', 'i')
            words[1].innerText = word
            words[2].innerText = front + convertKana(after, 'u', 'a') + 'ない'
            if (after == 'す') words[3].innerText = front + 'した'
            else if (after == 'く') words[3].innerText = front + 'いた'
            else if (after == 'ぐ') words[3].innerText = front + 'いだ'
            else if (after == 'む' || after == 'ぶ' || after == 'ぬ') words[3].innerText = front + 'んだ'
            else if (after == 'る' || after == 'う' || after == 'つ') words[3].innerText = front + 'っだ'
            words[11].innerText = front + convertKana(after, 'u', 'a') + 'なかった'
            words[27].innerText = words[0].innerText + 'ます'
            words[28].innerText = words[0].innerText + 'ません'
            words[29].innerText = words[0].innerText + 'ました'
            words[35].innerText = words[0].innerText + 'ませんでした'
            if (after == 'す') words[4].innerText = front + 'して'
            else if (after == 'く') words[4].innerText = front + 'いて'
            else if (after == 'ぐ') words[4].innerText = front + 'いで'
            else if (after == 'む' || after == 'ぶ' || after == 'ぬ') words[4].innerText = front + 'んで'
            else if (after == 'る' || after == 'う' || after == 'つ') words[4].innerText = front + 'っで'
            words[30].innerText = words[0].innerText + 'まして'
            words[12].innerText = front + convertKana(after, 'u', 'a') + 'なくて'
            words[36].innerText = words[0].innerText + 'ませんでして'
            words[5].innerText = front + convertKana(after, 'u', 'e') + 'る'
            words[13].innerText = front + convertKana(after, 'u', 'e') + 'ない'
            words[14].innerText = front + convertKana(after, 'u', 'e') + 'た'
            words[21].innerText = front + convertKana(after, 'u', 'e') + 'なかった'
            words[31].innerText = front + convertKana(after, 'u', 'e') + 'ます'
            words[37].innerText = front + convertKana(after, 'u', 'e') + 'ません'
            words[38].innerText = front + convertKana(after, 'u', 'e') + 'ました'
            words[44].innerText = front + convertKana(after, 'u', 'e') + 'ませんでした'
            words[8].innerText = front + convertKana(after, 'u', 'e') + 'ば'
            words[20].innerText = front + convertKana(after, 'u', 'a') + 'なければ'
            words[9].innerText = front + convertKana(after, 'u', 'o') + 'う'
            words[34].innerText = words[0].innerText + 'ましょう'
            words[6].innerText = front + convertKana(after, 'u', 'a') + 'せる'
            words[15].innerText = front + convertKana(after, 'u', 'a') + 'せない'
            words[16].innerText = front + convertKana(after, 'u', 'a') + 'せた'
            words[22].innerText = front + convertKana(after, 'u', 'a') + 'せなかった'
            words[32].innerText = front + convertKana(after, 'u', 'a') + 'せます'
            words[39].innerText = front + convertKana(after, 'u', 'a') + 'せません'
            words[40].innerText = front + convertKana(after, 'u', 'a') + 'せました'
            words[45].innerText = front + convertKana(after, 'u', 'a') + 'せませんでした'
            words[7].innerText = front + convertKana(after, 'u', 'a') + 'れる'
            words[17].innerText = front + convertKana(after, 'u', 'a') + 'れない'
            words[18].innerText = front + convertKana(after, 'u', 'a') + 'れた'
            words[23].innerText = front + convertKana(after, 'u', 'a') + 'れなかった'
            words[33].innerText = front + convertKana(after, 'u', 'a') + 'れます'
            words[41].innerText = front + convertKana(after, 'u', 'a') + 'れません'
            words[42].innerText = front + convertKana(after, 'u', 'a') + 'れました'
            words[46].innerText = front + convertKana(after, 'u', 'a') + 'れませんでした'
            words[19].innerText = front + convertKana(after, 'u', 'a') + 'せられる'
            words[24].innerText = front + convertKana(after, 'u', 'a') + 'せられない'
            words[25].innerText = front + convertKana(after, 'u', 'a') + 'せられた'
            words[26].innerText = front + convertKana(after, 'u', 'a') + 'せられなかった'
            words[43].innerText = front + convertKana(after, 'u', 'a') + 'せられます'
            words[47].innerText = front + convertKana(after, 'u', 'a') + 'せられません'
            words[48].innerText = front + convertKana(after, 'u', 'a') + 'せられました'
            words[49].innerText = front + convertKana(after, 'u', 'a') + 'せられませんでした'
            words[10].innerText = front + convertKana(after, 'u', 'e')
        }
    } else if (estimatedVerbType == 4) {
        if (word == 'くれる') {
            words[0].innerText = 'くれ'
            words[1].innerText = 'くれる'
            words[2].innerText = 'くれない'
            words[3].innerText = 'くれた'
            words[11].innerText = 'くれなかった'
            words[27].innerText = 'くれます'
            words[28].innerText = 'くれません'
            words[29].innerText = 'くれました'
            words[35].innerText = 'くれませんでした'
            words[4].innerText = 'くれて'
            words[30].innerText = 'くれまして'
            words[12].innerText = 'くれなくて'
            words[36].innerText = 'くれませんでして'
            words[5].innerText = 'くれられる'
            words[13].innerText = 'くれられない'
            words[14].innerText = 'くれられた'
            words[21].innerText = 'くれられなかった'
            words[31].innerText = 'くれられます'
            words[37].innerText = 'くれられません'
            words[38].innerText = 'くれられました'
            words[44].innerText = 'くれられませんでした'
            words[8].innerText = 'くれれば'
            words[20].innerText = 'くれなければ'
            words[9].innerText = 'くれろう'
            words[34].innerText = 'くれましょう'
            words[6].innerText = 'くれさせる'
            words[15].innerText = 'くれさせない'
            words[16].innerText = 'くれさせた'
            words[22].innerText = 'くれさせなかった'
            words[32].innerText = 'くれさせます'
            words[39].innerText = 'くれさせません'
            words[40].innerText = 'くれさせました'
            words[45].innerText = 'くれさせませんでした'
            words[7].innerText = 'くれられる'
            words[17].innerText = 'くれられない'
            words[18].innerText = 'くれられた'
            words[23].innerText = 'くれられなかった'
            words[33].innerText = 'くれられます'
            words[41].innerText = 'くれられません'
            words[42].innerText = 'くれられました'
            words[46].innerText = 'くれられませんでした'
            words[19].innerText = 'くれさせられる'
            words[24].innerText = 'くれさせられない'
            words[25].innerText = 'くれさせられた'
            words[26].innerText = 'くれさせられなかった'
            words[43].innerText = 'くれさせられます'
            words[47].innerText = 'くれさせられません'
            words[48].innerText = 'くれさせられました'
            words[49].innerText = 'くれさせられませんでした'
            words[10].innerText = 'くれ'
        } else {
            words[0].innerText = word.substring(0, word.length - 1)
            words[1].innerText = word
            words[2].innerText = words[0].innerText + 'ない'
            words[3].innerText = words[0].innerText + 'た'
            words[11].innerText = words[0].innerText + 'なかった'
            words[27].innerText = words[0].innerText + 'ます'
            words[28].innerText = words[0].innerText + 'ません'
            words[29].innerText = words[0].innerText + 'ました'
            words[35].innerText = words[0].innerText + 'ませんでした'
            words[4].innerText = words[0].innerText + 'て'
            words[30].innerText = words[0].innerText + 'まして'
            words[12].innerText = words[0].innerText + 'なくて'
            words[36].innerText = words[0].innerText + 'ませんでして'
            words[5].innerText = words[0].innerText + 'られる'
            words[13].innerText = words[0].innerText + 'られない'
            words[14].innerText = words[0].innerText + 'られた'
            words[21].innerText = words[0].innerText + 'られなかった'
            words[31].innerText = words[0].innerText + 'られます'
            words[37].innerText = words[0].innerText + 'られません'
            words[38].innerText = words[0].innerText + 'られました'
            words[44].innerText = words[0].innerText + 'られませんでした'
            words[8].innerText = words[0].innerText + convertKana(word[word.length - 1], 'u', 'e') + 'ば'
            words[20].innerText = words[0].innerText + 'なければ'
            words[9].innerText = words[0].innerText + 'ろう'
            words[34].innerText = words[0].innerText + 'ましょう'
            words[6].innerText = words[0].innerText + 'させる'
            words[15].innerText = words[0].innerText + 'させない'
            words[16].innerText = words[0].innerText + 'させた'
            words[22].innerText = words[0].innerText + 'させなかった'
            words[32].innerText = words[0].innerText + 'させます'
            words[39].innerText = words[0].innerText + 'させません'
            words[40].innerText = words[0].innerText + 'させました'
            words[45].innerText = words[0].innerText + 'させませんでした'
            words[7].innerText = words[0].innerText + 'られる'
            words[17].innerText = words[0].innerText + 'られない'
            words[18].innerText = words[0].innerText + 'られた'
            words[23].innerText = words[0].innerText + 'られなかった'
            words[33].innerText = words[0].innerText + 'られます'
            words[41].innerText = words[0].innerText + 'られません'
            words[42].innerText = words[0].innerText + 'られました'
            words[46].innerText = words[0].innerText + 'られませんでした'
            words[19].innerText = words[0].innerText + 'させられる'
            words[24].innerText = words[0].innerText + 'させられない'
            words[25].innerText = words[0].innerText + 'させられた'
            words[26].innerText = words[0].innerText + 'させられなかった'
            words[43].innerText = words[0].innerText + 'させられます'
            words[47].innerText = words[0].innerText + 'させられません'
            words[48].innerText = words[0].innerText + 'させられました'
            words[49].innerText = words[0].innerText + 'させられませんでした'
            words[10].innerText = words[0].innerText + 'ろ'
        }
    }
}
let type = 0, verbType = 0, word = '';
let words = document.querySelectorAll('span#words');
let typeBtns = document.querySelectorAll('#type button');
let verbTypeBtns = document.querySelectorAll('#verbType button');
typeBtns[type].style.background = "#111";
verbTypeBtns[verbType].style.background = "#111";
document.querySelector('input').addEventListener('change', function () {
    word = document.querySelector('input').value;
    refresh(verbType)
})
for (let i = 0; i < 3; i++) {
    typeBtns[i].addEventListener('click', function () {
        if (i != 0)
            alert('暂不支持。')
    })
}
for (let i = 0; i < 5; i++) {
    verbTypeBtns[i].addEventListener('click', function () {
        verbTypeBtns[verbType].style.background = "#333";
        verbType = i;
        verbTypeBtns[verbType].style.background = "#111";
        refresh(verbType)
    })
}


