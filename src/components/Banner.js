export default function Banner() {
    return (
        <div className="form-group">
            <div className="row">
                <div className="col-sm-4">
                    <label htmlFor="" className="editor-form__label text-coral">Спецпредложение</label>
                </div>
                <div className="col-sm-8">
                    <small>Если у вас нет сайта, его можно создать в конструкторе сайтов всего за</small> <b className="text-mars text-nowrap">999 руб./год</b> <small className="text-line-through text-nowrap">9 999 руб./год</small><br /><br />
                    <a href="https://google.com" className="btn btn-text-primary" target="_blank" rel="noreferrer">СОЗДАТЬ САЙТ</a>
                </div>
            </div>
        </div>
    );
}
