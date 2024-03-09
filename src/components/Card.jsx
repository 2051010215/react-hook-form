import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'antd';
import axios from 'axios';
import { StyledViewMoreButton, StyledCard, StyledImg } from '../styles/StyledComponents';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

const { Meta } = Card;

const fetchAlbumPhoto = async (page) => {
    try {
        const res = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=24`)
        return res.data
    } catch (error) {
        console.log(error);
    }
}

const CardBody = () => {
    const [albumPhotos, setAlbumPhotos] = useState([]);
    const [nextPage, setNextPage] = useState(10);
    const [formValues, setFormValues] = useState({
        search: '',
        idRange: { start: null, end: null },
    });
    const [showAll, setShowAll] = useState(true);

    const handleViewMore = async () => {
        try {
            const res = await fetchAlbumPhoto(nextPage);
            const newPhotos = [...albumPhotos, ...res];
            setAlbumPhotos(newPhotos);
            setNextPage(nextPage + 1);
            console.log(newPhotos);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        handleViewMore();
    }, []);

    const form = useForm({
        defaultValues: formValues,
    });

    const { register, control, handleSubmit, formState, } = form;
    const { errors } = formState;

    const onSubmit = (data) => {
        console.log(data);
        const { search, idRange } = data;

        // Kiểm tra xem giá trị có thay đổi ko và chỉ cập nhật state cho các trường đã thay đổi
        setFormValues((prevValues) => ({
            search: search !== prevValues.search ? search : prevValues.search,
            idRange: {
                start: idRange.start !== prevValues.idRange.start ? idRange.start : prevValues.idRange.start,
                end: idRange.end !== prevValues.idRange.end ? idRange.end : prevValues.idRange.end,
            },
        }));
        setShowAll(false);
    };

    const filteredPhotos = showAll ? albumPhotos : albumPhotos.filter((item) =>
        item.author.toLowerCase().includes(formValues.search.toLowerCase()) &&
        (!formValues.idRange.start || item.id >= formValues.idRange.start) &&
        (!formValues.idRange.end || item.id <= formValues.idRange.end)
    );

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div style={{ marginBottom: 10 }}>
                    <label>Quick Search:</label>
                    <input
                        style={{ marginInline: 10 }}
                        type="search"
                        placeholder="Enter author name..."
                        {...register('search')}
                    />
                </div>

                <label>Id Range:</label>
                <input
                    style={{ marginInline: 10 }}
                    type="number"
                    placeholder="Start Id..."
                    {...register('idRange.start')}
                />
                <input
                    style={{ marginInline: 10 }}
                    type="number"
                    placeholder="End Id..."
                    {...register('idRange.end')}
                />

                <button type="submit">Search</button>
            </form>
            <DevTool control={control} />

            {!showAll && (
                <div style={{ paddingLeft: '2%', display: 'flex', marginTop: '10px' }}>
                    <h2 style={{ flex: '85%' }}>Search result: </h2>
                    <Button style={{ flex: '15%'}} onClick={() => setShowAll(true)}>
                        Show All
                    </Button>
                </div>
            )}
            <Row gutter={[20, 20]}>
                {filteredPhotos.map((item) => (
                    <Col key={item.id}>
                        <StyledCard
                            hoverable
                            cover={<StyledImg alt={item.author} src={item.download_url} />}
                        >
                            <Meta title={
                                <div style={{ display: 'flex' }}>
                                    <span style={{ flex: '60%' }}>{item.author}</span>
                                    <span style={{ flex: '40%', textAlign: "end", paddingInline: '3%' }}>id: {item.id}</span>
                                </div>
                            } description={item.url} />
                        </StyledCard>
                    </Col>
                ))}
            </Row>

            <StyledViewMoreButton onClick={() => handleViewMore()}>
                View more...
            </StyledViewMoreButton>

        </>
    );
};

export default CardBody;
