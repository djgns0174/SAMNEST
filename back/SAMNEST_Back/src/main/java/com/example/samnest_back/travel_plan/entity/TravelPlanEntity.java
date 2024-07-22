package com.example.samnest_back.travel_plan.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.List;

@Entity
@Getter
@Setter
public class TravelPlanEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String travel_plan_name;

    @Column(nullable = false)
    private String destination;

    @Column
    private LocalDate startDate;

    @Column
    private LocalDate endDate;

    @Column
    @OneToMany(mappedBy = "travelPlan", cascade = CascadeType.ALL )
    private List<DailyScheduleEntity> dailySchedulesEntity;
}
