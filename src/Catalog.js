import React from "react";
import './Catalog.css';

function Catalog(props) {
    return (
        <div className="Catalog">
            <div className="CatalogTitle">{props.contents.title}</div>
            <CatalogList itemList={props.contents.catalog}/>
        </div>
    );
}

function CatalogList(props) {
    const catalogComponents = props.itemList.map(
        item => <a key={item.id} href={item.url}>{item.name}</a>
    )

    return (
        <div className="CatalogList">
            {catalogComponents}
        </div>
    );
}

export default Catalog;