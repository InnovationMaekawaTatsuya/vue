document.addEventListener('DOMContentLoaded', () => {
    // コンポーネントは必ず先に読み込む
    // Vue.component('fruits-list-title', {
    //     template: '<h1>フルーツ一覧</h1>'
    // })
    Vue.component('fruits-list-description', {
        template: '<p>季節の代表的なフルーツの一覧です</p>'
    })
    Vue.component('fruits-list-table', {
        template: `
            <table>
                <tr>
                    <th>季節</th>
                    <th>フルーツ</th>
                </tr>
                <tr>
                    <th>春</th>
                    <th>イチゴ</th>
                </tr>
                <tr>
                    <th>夏</th>
                    <th>スイカ</th>
                </tr>
                <tr>
                    <th>秋</th>
                    <th>ぶどう</th>
                </tr>
                <tr>
                    <th>冬</th>
                    <th>みかん</th>
                </tr>
            </table>
        `
    })
    Vue.component('test', {
        template: `
            <div>
                <p><fruits-list-title></fruits-list-title></p>
            </div>
        `
    })
    Vue.component('fruits-list-title', {
        template: '#fruits-list-title'
    })

    // インスタンス作成
    new Vue ({
        el: '#fruits-list'
    })
});