import React, {useEffect, useState} from 'react';
import {Container} from "react-bootstrap";
import CategoriesService from './../../../../services/Posts/categories.service';
import CardCategory from "../../../../components/ui/cardCategory";
import Loading from "../../../../components/ui/loading";

const CategoriesCards = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchCategory = async () => {
            await CategoriesService.fetchCategoryCount().then((response) => {
                setCategories(response.data)
                setLoading(false)
            })
        }
        fetchCategory()
    }, [])

    return (
        <>
            {
                loading
                    ?
                    <Loading/>
                    :
                    <Container fluid className="row d-flex justify-content-around p-2">
                        {
                            categories.map((category) => {
                                return (
                                    <CardCategory
                                        key={category.id}
                                        id={category.id}
                                        category={category.category}
                                        count={category.article_count}
                                        icon={category.icon}
                                        created={category.created_at}
                                    />
                                )
                            })
                        }
                    </Container>
            }
        </>
    );
};

export default CategoriesCards;